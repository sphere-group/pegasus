Sphere File System (SphereFS)
=============================

Overview
--------

SphereFS provides a unified standard for addressing files within a Sphere game.
At its core the system is based on relative paths (e.g. `sounds/munch.wav`).
This hides the underlying physical file system from the game, which serves two
purposes:

1. It facilitates sandboxing.  Under SphereFS, a game can only access files in
   its own asset repository or certain other locations deemed safe by the
   implementation and exposed as aliases.  For example a game might create a
   save file at `~/mygame/save.json`.  Any attempt to circumvent the sandbox
   using trickery (e.g. `@/../`) shall be met with a `TypeError` and the
   operation cancelled.

2. It abstracts the game's delivery mechanism.  As SphereFS is based on
   relative paths and well-defined aliases, path semantics remain the same
   regardless of whether the game is provided as a loose collection of asset
   files, an SPK package, etc.


I. The Asset Repository ("@/")
------------------------------

The Asset Repository, henceforth "Repository", is the conceptual directory
containing the files making up a game package.

In most cases the Repository is referenced implicitly by using a relative path
such as `sounds/munch.wav`.  In certain contexts, however, such as module IDs
used in a `require()` call, a bare SphereFS path may be ambiguous.  For
example, `require('gfx')` will always load the built-in `gfx` module.  In cases
such as this, the path may be rewritten as `@/path/to/file` to resolve the
ambiguity.

1. When a path string beginning `@/...` is parsed, the implementation MUST
   resolve it against the location of the game manifest file, usually a file
   named `game.s2gm`.  This location will henceforth be referred to as the
   Root.

2. The implementation shall allow write access to the Repository IF AND ONLY IF
   it declares the `sphere_legacy_api` extension, indicating native support for
   games written for Sphere 1.x.  These games expect their repository to be
   writable.  If the `sphere_legacy_api` extension is not declared, and a game
   attempts to write to the Repository, the implementation MUST throw a
   `TypeError`.

3. If the implementation declares the `sphere_legacy_api` extension, legacy
   functions (e.g. `LoadImage`)--and ONLY legacy functions--MUST interpret `~/`
   as an alias for the Root.


II. The Save Data Directory ("~/")
----------------------------------

The Save Data directory is aliased as `~/` and refers to a conceptual
user-specific, writable directory that games can use to persist data between
game sessions or even other games.  For example, a game might use this
location to store save data, or a sequel might import data from the previous
installment.

1. When a path string beginning `~/...` is parsed, the implementation MUST
   resolve it against the Save Data directory.

2. `~/` MUST refer to the same location for all games.  In particular, any path
   string beginning `~/...` shall refer to the same file regardless of the
   game providing the path.

3. The implementation MUST ensure the Save Data directory is writable by the
   current user without privilege elevation on a properly configured system.
   The specific location and storage mechanism don't matter as long as this
   requirement is satisfied.


III. The System Asset Collection ("#/")
---------------------------------------

An implementation may choose to expose a collection of default assets which are
available for use by all games.  An engine might use this mechanism to provide
a collection of ready-to-use fonts or window styles, for example.

The System Asset Collection ("SAC") is the conceptual directory containing
these assets and is aliased as `#/`.  Note that while providing a SAC is
optional, the `#/` alias is reserved per SphereFS spec and MUST be treated
specially by the implementation.

1. When a path string beginning `#/...` is parsed, the implementation MUST
   either:

   1. Resolve the path against the System Asset Repository.  An implementation
      MUST declare the `sphere_fs_system_alias` extension if it accepts paths
      of this form.

   2. Reject the path by throwing a `TypeError`.

2. `#/` MUST refer to the same directory for all games.  In particular, any
   SphereFS path beginning '#/...' shall refer to the same file regardless of
   the game providing the path.

3. The implementation shall not allow write access to this directory.  If
   game code tries to rename or delete anything in this directory, or attempts
   to open a file contained within in write mode, the engine MUST throw a
   `TypeError`.


IV. Path Resolution
-------------------

There are a few rules the implementation must follow when dealing with SphereFS
paths to ensure the integrity of the sandbox and predictability for game
developers.

1. Paths containing `.` (current directory) or `..` (uplevel) terms must be
   normalized by removing or collapsing all `.` and `..` terms.  If such a path
   would exit the sandbox if resolved (e.g. in `inside/../../outside`), the
   implementation MUST throw a `TypeError`.
   
   IN NO CASE is the implementation allowed to normalize a path against the
   physical file system.  Normalization MUST be done before path resolution.

2. Paths of the form `path/to/file` refer to the Asset Repository and MUST be
   resolved against the Root (see Part I).  In the case of module IDs, such a
   name might or might not refer to a file in the Asset Repository, depending
   on available modules.  See the Sphere Modules specification for more
   information.

3. Paths or module IDs beginning `@/...` MUST have the alias stripped and the
   remainder of the path resolved according to Rule 1.

4. Paths or module IDs beginning `~/...` MUST be resolved against the current
   user's Save Data directory.

5. Paths or module IDs beginning `#/...` shall be resolved against the engine's
   System Asset Repository IF AND ONLY IF the engine declares the
   `sphere_fs_system_alias` extension; otherwise the implementation shall throw
   a `TypeError`.
	
6. A path might be absolute, referring unambiguously to a file or directory on
   the physical file system of the host OS.  When such a path is parsed in any
   context where a SphereFS path is expected, the implementation may either:

	1. Resolve the path against the physical file system.  The implementation
	   MUST declare the `sphere_fs_absolute_path` extension if it accepts such
	   paths.  An absolute path MUST NOT accepted in place of a CommonJS module
	   ID.  If this happens (for example if a game passes an absolute path to
	   `require()`), the implementation MUST throw a `TypeError`.

    2. Reject the path by throwing a `TypeError`.
