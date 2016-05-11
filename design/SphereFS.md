Sphere File System (SphereFS)
=============================

Abstract
--------

A standard for addressing files and directories within *Pegasus* game code
based on relative paths (e.g. `sounds/munch.wav`) and sand-character aliases
(e.g. `~/pigquest.json`).  The details of the host's file system are thus
hidden from game code, which serves two purposes:

1. It facilitates sandboxing.  A game can only access files in its own asset
   repository or certain other locations deemed safe by the implementation and
   exposed as aliases.  For example a game might refer to its save file as
   `~/mygame/save.json`.  Any attempt to circumvent the sandbox using trickery
   (e.g. `@/../`) is met with a sandboxing error and the operation cancelled.

2. It abstracts the game's delivery mechanism.  As the system is based on
   relative paths and well-defined aliases, path semantics remain the same
   regardless of whether the game is provided as a loose collection of asset
   files, an SPK package, etc.


Terminology
-----------

* **Absolute Path:** A path which refers unambiguously to a file or directory
  in the Host's file system.  For example, `C:\pigs\maggie.fat` or `/usr/bin/`
  would be absolute paths.

* **Host:** The operating system hosting the Implementation.

* **Implementation:** The SphereFS implementation in question, typically a
  *Pegasus*-compliant game engine.

* **SphereFS Path:** A path of the form `path/to/file`, `@/path/to/file`,
  `~/path/to/file` or `#/path/to/file`, which refers to a file or directory
  within the SphereFS sandbox.


I. The Repository
-----------------

The **Repository** is a conceptual read-only directory containing the files and
directories which make up a running game.  This facilitates sandboxing and
abstracts the specific delivery method for a game package, which ensures
predictable behavior of game code from system to system.

1. The root of the Repository MUST be mapped to the location of the game
   manifest file.  This is a JSON file named `game.s2gm` which contains
   metadata describing the game.  The particular layout of this file is beyond
   the scope of the SphereFS specification.

2. The Implementation shall not allow write access to the Repository.  If game
   code attempts to modify the content of the Repository in any way, the
   implementation MUST throw a `TypeError`.


II. The Save Store
------------------

The **Save Store** is a conceptual user-specific, writable directory that game code
can use to persist data between game sessions or even other games.  For
instance, a game might store save data here, or a sequel might import data from
the previous installment.

1. The Save Store MUST be mapped to the same location for all games.  In
   particular, any path beginning `~/...` shall refer to the same file
   regardless of the game providing it.

2. The Implementation MUST ensure the Save Store is writable by a standard
   user, without any privilege elevation, on a properly configured Host.


III. The System Asset Collection
--------------------------------

The **System Asset Collection**, henceforth **SAC**, is a conceptual read-only
directory containing data available for use by all games run with a given
implementation.  The Implementation might use this to provide a collection of
default fonts, for instance.

Implementation of the SAC is optional and support is gated by an extension.

1. If a SAC is provided, the Implementation MUST declare the
   `sphere_fs_system_alias` extension.

2. The SAC MUST be mapped to the same location for all games.  In particular,
   any path beginning '#/...' shall refer to the same file regardless of the
   game providing it.

3. The Implementation shall not allow write access to the SAC.  If game code
   attempts to modify the content of the SAC in any way, the Implementation
   MUST throw a `TypeError`.


IV. Absolute Paths
------------------

An **Absolute Path** is defined as any path which refers unambiguously to a
file or directory on the host operating system's file system: for example,
`C:\tmp\scott.sux` (Windows) and `/tmp/maggie.fat` (*nix) are both examples of
Absolute Paths.

Whether to support Absolute Paths is at the discretion of the Implementation
and support is gated by an extension.

1. If the Implementation supports Absolute Paths, it MUST declare the
   `sphere_fs_absolute_path` extension.

2. Absolute Paths shall not be normalized prior to resolution; the path string
   MUST be passed to the Host exactly as it was received.

3. Absolute Paths MUST NOT be accepted as CommonJS module IDs.  If, for
   instance, a game passes an Absolute Path to `require()`, the Implementation
   MUST throw a `TypeError`.

3. The Implementation shall not allow write access to the file or directory
   referred to by an Absolute Path.  If game code attempts to modify such a
   file or directory in any way, The Implementation MUST throw a `TypeError`.


V. Rules for Path Resolution
----------------------------

1. All SphereFS Paths MUST be normalized by removing or collapsing all `.` and
   `..` terms prior to resolution.  If such a path would breach the sandbox at
   any point during resolution (e.g. `in/../../out`), The Implementation MUST
   throw a `TypeError`.

2. Paths of the form `path/to/file` MUST be resolved against the root of the
   Repository.  In the case of module IDs, such a name MAY be mapped to a file
   in the Repository, depending on available modules.  See the Sphere Modules
   specification for more information.

3. Paths or module IDs beginning `@/...` MUST have the alias stripped and the
   remainder of the path resolved according to Rules 1-2.

4. Paths or module IDs beginning `~/...` MUST be resolved against the root of
   the Save Store.

5. Paths or module IDs beginning `#/...` MUST be resolved against the root of
   the SAC IF AND ONLY IF the engine declares the `sphere_fs_system_alias`
   extension.  If this extension has not been declared, the Implementation MUST
   throw a `TypeError`.

6. A path might be absolute, referring unambiguously to a file or directory on
   the physical file system of the host OS.  This is called an Absolute Path
   (see Part IV).  When such a path is parsed in any context where a SphereFS
   path is expected, the implementation may either:

   1. Resolve the path, verbatim, against the physical file system.  The
      implementation MUST declare the `sphere_fs_absolute_path` extension if it
      accepts such paths.

   2. Reject the path by throwing a `TypeError`.
