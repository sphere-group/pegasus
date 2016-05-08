Sphere File System
==================

SphereFS provides a unified standard for addressing files within a Sphere game.
At its core the system is based on relative paths (e.g. `sounds/munch.wav`).
This hides the underlying physical file system from the game, which serves two
purposes:

1. It facilitates sandboxing.  A game may only access files in its own game
   package or certain other locations deemed safe by the engine via aliases. For
   example a game might create a save file at `~/mygame/save.json`.  Any attempt
   to subvert the sandbox using trickery (e.g. `@/../`) will be met with a
   TypeError and the operation cancelled.

2. It abstracts the game's delivery mechanism.  Because SphereFS is based on
   relative paths and engine-defined aliases, the meaning of a path doesn't
   change whether the game is provided as a loose collection of asset files or
   a single-file package.


I. Path Resolution
------------------

1. When provided with a relative file path (e.g. `sounds/munch.wav`), the engine
   shall interpret the path as being relative to the directory containing the
   game's manifest file.

2. A path may have a single-character alias as its first term.  When provided
   with such a path, the behavior depends on the alias:

    a. Paths or module IDs beginning with `@/` shall be interpreted as if the
       remainder of the string after "@/" were a normal SphereFS path relative
       to the game manifest (see Rule 1).
    b. Paths or module IDs beginning with `~/` shall be relative to logged in
       user's save data directory.
    c. Paths or module IDs beginning with `#/` shall require the engine to
       declare the `sphere_fs_system_alias` extension, and that satisfied, be
       relative to the location of the engine's built-in assets.

3. A path may be absolute, referring to the physical file system of the OS
   hosting the engine.  The engine implementor has two options for dealing with
   these:

	a. The engine may declare the `sphere_fs_absolute_path` extension and allow
	   absolute paths in any context where a SphereFS filename is the preferred
	   input.

    b. The engine implementor may choose not to support absolute paths at all
       and actively reject them by throwing a TypeError.
	
	In no case shall an absolute path be accepted in place of a CommonJS module
	ID.  If an absolute path is passed to the require() function, the engine
	MUST throw a TypeError.
