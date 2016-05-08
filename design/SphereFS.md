Sphere File System
==================

SphereFS provides a unified standard for addressing files within a Sphere game.
At its core the system is based on relative paths (e.g. `sounds/munch.wav`).
This hides the underlying physical file system from the game, which serves two
purposes:

1. It facilitates sandboxing.  Under SphereFS, a game can only access files in
   its own game package or certain other locations deemed safe by the
   implementation and exposed as aliases.  For example a game might create a
   save file at `~/mygame/save.json`.  Any attempt to subvert the sandbox using
   trickery (e.g. `@/../`) shall be met with a `TypeError` and the operation
   cancelled.

2. It abstracts the game's delivery mechanism.  As SphereFS is based on
   relative paths and standard aliases, the meaning of a path doesn't change
   whether the game is provided as a loose collection of asset files or a
   single-file package.


I. Path Resolution
------------------

1. When provided with a relative file path (e.g. `sounds/munch.wav`), the
   engine MUST resolve the path relative to the directory containing the game's
   manifest file.

2. A path may have a single-character alias as its first term.  When provided
   with such a path, the behavior depends on the alias:

    1. Paths or module IDs beginning with `@/` shall be interpreted as if the
       remainder of the string after "@/" were a normal SphereFS path relative
       to the game manifest (see Rule 1).
    2. Paths or module IDs beginning with `~/` shall be relative to logged in
       user's save data directory.
    3. Paths or module IDs beginning with `#/` shall require the engine to
       declare the `sphere_fs_system_alias` extension, and that satisfied, be
       relative to the location of the engine's built-in assets.

3. A path might be absolute, referring unambiguously to the physical file
   system of the OS hosting the engine.  When such a path is parsed in any
   context where a SphereFS path is expected, the implementation may either:

	1. Resolve the path.  The implementation MUST declare the
	   `sphere_fs_absolute_path` extension if it accepts absolute paths.  An
	   absolute path MUST NOT accepted in place of a CommonJS module ID.  If
	   this happens (for example if a game passes an absolute path to
	   `require`), the implementation MUST throw a `TypeError`.

    2. Reject the path by throwing a `TypeError`.


II. The SphereFS Sandbox ("@/")
-------------------------------

The Sandbox is normally accessed implicitly using a relative path such as
`sounds/munch.wav`.  In some contexts, such as module IDs used in a `require`
call, this may be ambiguous.  In such cases the relative path may be prefixed
with `@/` to resolve the ambiguity.

1. `@/` MUST refer to the directory containing the game manifest file, usually
   a file named `game.s2gm`.  This location will henceforce be designated as
   the Sandbox in this document.

2. The implementation may allow write access to the Sandbox if and only if it
   declares the `sphere_legacy_api` extension, indicating native support for
   games written for Sphere 1.x (which expect their sandbox to be writable).
   If the `sphere_legacy_api` extension is not declared, and a game attempts to
   write to the Sandbox, the implementation MUST throw a `TypeError`.

3. If the implementation declares the `sphere_legacy_api` extension, legacy
   functions (e.g. `LoadImage`)--and only legacy functions--MUST interpret `~/`
   as an alias for the Sandbox.  This ensures full compatibility.


III. The Save Data Directory ("~/")
-----------------------------------

The save data directory is aliased as "~/" and refers to a user-specific
location for data which needs to persist between game sessions.  For example,
an RPG might use this directory to store save data.

This directory has a few simple requirements:

1. `~/` MUST refer to the same directory for all games.  In particular, any
   SphereFS path beginning "~/..." shall refer to the same file regardless of
   the game providing the path.

2. The implementation MUST ensure the save data directory is writable by the
   current user without privilege elevation on a properly configured system.
   The specific location doesn't matter as long as this requirement is met.


IV. The System Assets Directory ("#/")
--------------------------------------

An implementation may choose to expose a directory containing assets available
to all games.  This can be useful for providing default fonts and window
styles, for example.

3. When a path beginning "#/..." is parsed, the implementation may either:

   1. Resolve the path to the system assets directory.  An implementation MUST
      declare the `sphere_fs_system_alias` extension if it accepts paths of
      this form.

   2. Reject the path by throwing a `TypeError`.

1. `#/` MUST refer to the same directory for all games.  In particular, any
   SphereFS path beginning "#/..." shall refer to the same file regardless of
   the game providing the path.

2. The implementation shall not allow write access to this directory.  If
   game code tries to rename or delete anything in this directory, or attempts
   to open a file contained within in write mode, the engine MUST throw a
   `TypeError`.


DCCCXII. The All-Devouring Pig Directory (":pig_nose:/")
--------------------------------------------------------

This is where the all-devouring pig is stored.  **\*MUNCH\***
