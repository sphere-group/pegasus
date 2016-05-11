Sphere File System (SphereFS)
=============================

Abstract
--------

A standard for addressing files and directories within *Pegasus* game code
based on relative paths (e.g. `sounds/munch.wav`) and single-character aliases
(e.g. `~/pigquest.json`).  The details of the host's file system are thus
hidden from game code, which serves two purposes:

1. Facilitates sandboxing by allowing a game access only to files in its own
   repository or certain other locations deemed safe by the implementation and
   exposed as aliases.  For example a game might refer to its save file as
   `~/mygame/save.json`.  Attempts to circumvent the sandbox using trickery
   (e.g. `@/../`) are met with a sandboxing error and the operation cancelled.

2. Abstracts the game's delivery mechanism.  As the system is based on relative
   paths and well-defined aliases, path semantics remain the same regardless of
   whether the game is provided as a loose collection of asset files, an SPK
   package, etc.


Terminology
-----------

* **Absolute Path:** A path which refers unambiguously to a file or directory
  in the Host's file system.  For example, `C:\pigs\maggie.fat` and `/usr/bin/`
  are absolute paths.

* **Host:** The operating system hosting the Implementation.

* **Implementation:** The SphereFS implementation in question, typically a
  *Pegasus*-compliant game engine.

* **SphereFS Path:** A path of the form `path/to/file`, `@/path/to/file`,
  `~/path/to/file` or `#/path/to/file`, which refers to a resource within the
  SphereFS sandbox.


I. The Repository
-----------------

The **Repository** is a conceptual read-only directory containing the files and
directories ("resources") which make up a running game.  This facilitates
sandboxing and abstracts the specific delivery method for a packaged game,
which ensures predictable behavior of game code from system to system.

1. The root of the Repository MUST be mapped to the location of the game
   manifest file.  This is a JSON file named `game.s2gm` which contains
   metadata describing the game.  The particular layout of this file is beyond
   the scope of the SphereFS specification.

2. The Implementation shall not allow write access to the Repository.  If game
   code attempts to modify the content of the Repository in any way, the
   implementation MUST throw a `TypeError`.


II. The Save Store
------------------

The **Save Store** is a conceptual user-specific, writable directory that game
code can use to persist data between game sessions or even other games.  For
instance, a game might put save files here, or a sequel might import data from
the previous installment.

1. The Save Store shall be mapped to the same location for all games.  In
   particular, any path beginning `~/...` MUST resolve to the same resource
   regardless of where the request originated.

2. The Implementation MUST ensure the Save Store is writable by a standard
   user, without any privilege elevation, on a properly configured Host.


III. The System Asset Collection
--------------------------------

The **System Asset Collection**, henceforth **SAC**, is a conceptual read-only
directory containing data available for use by all game code run by a given
Implementation.  An Implementation might use this to provide a collection of
default fonts, for instance.

1. SAC support is optional and gated by an extension.  If a SAC is provided,
   the Implementation MUST declare the `sphere_fs_system_alias` extension.

2. The SAC shall be mapped to the same location for all games.  In particular,
   any path beginning `#/...` MUST resolve to the same resource regardless of
   where the request originated.

3. The Implementation shall not allow write access to the SAC.  If game code
   attempts to modify the content of the SAC in any way, the Implementation
   MUST throw a `TypeError`.


IV. Absolute Paths
------------------

An **Absolute Path** is defined as any path which refers unambiguously to a
resource within the Host's file system.  `C:\tmp\scott.sux` (Windows) and
`/tmp/maggie.fat` (*nix) are both examples of Absolute Paths.

1. Absolute Path support is optional and gated by an extension.  If
   Absolute Paths are supported, the Implementation MUST declare the
   `sphere_fs_absolute_path` extension.

2. Absolute Paths shall not be modified prior to resolution; the path MUST be
   forwarded to the Host exactly as it was received.

3. Absolute Paths shall not be accepted as CommonJS module IDs.  If such a
   path is given in a `require()` call, the Implementation MUST throw a
   `TypeError`.

3. The Implementation shall not allow write access to the resource referred to
   by an Absolute Path.  If game code attempts to modify such a resource in any
   way, the Implementation MUST throw a `TypeError`.


V. Normalization
----------------

Under SphereFS, paths must be normalized prior to resolution to ensure they
don't escape the sandbox through a symbolic link.  Normalization takes one
argument *argument* and performs the following steps:

1. If *argument* is an Absolute Path, return *argument*.

1. Otherwise, split *argument* into an array of substrings at each `/` or `\`,
   excluding empty strings.  Let *terms* be equal to the result.

2. If the element at index 0 of *terms* is equal to "~", "@", or "#", then:

      1. Let *alias* be equal to the element at index 0 of *terms*.

      2. Remove the element at index 0 from *terms*.

3. Repeat for each element *term* in *terms*:

   1. Let *index* be equal to the position of *term* in *terms*, starting at
      zero.

   3. If *term* is equal to ".", remove the element at *index* from *terms*.

   4. If *term* is equal to "..", then:

      1. If *index* is greater than zero, remove the elements at *index* and
         *index - 1* from *terms*.

      2. Otherwise, throw a `TypeError`.

4. If *alias* is equal to "~", "@", or "#", insert *alias* into *terms* at
   index 0.

5. Join *terms* into a single string using separator character "/".  Let *path*
   be equal to the result.

6. If *argument* refers to a directory, append "/" to *path*.

7. Return *path*.


VI. Path Resolution
-------------------

Path resolution takes one argument *argument* and performs the following steps
to convert a path into a reference to a resource:

1. Normalize *argument* according to the algorithm described in Part V.  Let
   *path* be equal to the result.

1. If *path* is an Absolute Path, then:

   1. If the Implementation does not declare `sphere_fs_absolute_path` as an
      extension, throw a `TypeError`.

   2. Otherwise, forward *path* to the Host for resolution.  Let *resource* be
      a reference to the resource at that location.

2. If *path* begins with `@/...`, then:

   1. Remove the first two characters from *path*.
   
   2. Resolve *path* relative to the root of the Repository.  Let *resource* be
      a reference to the resource at that location.
   
   3. Return *resource*.

3. If *path* begins with `~/...`, then:

   1. Remove the first two characters from *path*.
   
   2. Resolve *path* relative to the root of the Save Store.  Let *resource* be
      a reference to the resource at that location.
   
   3. Return *resource*.

4. If *path* begins with `#/...`, then:

   1. If the Implementation does not declare `sphere_fs_system_alias` as an
      extension, throw a `TypeError`.

   2. Otherwise, remove the first two characters from *path*.
   
   3. Resolve *path* relative to the root of the SAC.  Let *resource* be a
      reference to the resource at that location.
   
   4. Return *resource*.

5. Otherwise:
   
   1. Resolve *path* relative to the root of the Repository.  Let *resource* be
      a reference to the resource at that location.
   
   2. Return *resource*.
