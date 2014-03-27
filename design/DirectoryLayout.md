Directory layout
================

| Type            | Stage       |
|-----------------|-------------|
| Design document | Researching |


### Abstract ###
This document covers the possible structure of directories and files of the games
and system for a Pegasus complying game and engine. The directory structure is
used for resource loading and sandboxing.

### Terminology ###
Resource: Any file loadable by a Pegasus complying engine. This includes images,
fonts, spritesets, maps, sounds but also scripts.

Directory: A container of files. Same as 'folder'.

Directory layout of the system: The directory layout of the engine dependent
files, delivered with the engine.

### Requirements ###
When designing the directory structure of a game and of the system, a couple
of requirements need to be considered:

 * Support both Windows and *nix file systems: they have different path
   separators and security measures. Also, some file systems have case
   sensitivity.
 * Have a basic sense of security: prevent easy distruction of data not
   meant to be touched by a Pegasus game or engine.
 * Allow for libraries.

### Directory layout ###

TODO

```
/
	system/
		fonts/
		images/
		maps/
		misc/
		scripts/
		sounds/
		spritesets/
		tilesets/
		windowstyles/
	game/
		fonts/
		images/
		libraries/
			<library name>/
				fonts/
				images/
				maps/
				misc/
				scripts/
				sounds/
				spritesets/
				tilesets/
				windowstyles/
		maps/
		misc/
		scripts/
		sounds/
		spritesets/
		tilesets/
		windowstyles/		
```

### Root and Home mapping ###
TODO

`/` is mapped to the root of the directory layout.
`~/` is mapped to the user data directory. This is:
 * `%APPDATA%\<name of game>\` on Windows.
 * `/Users/$USER/Library/Application Support/<name of game>/` on Mac OSX.
 * `/home/$USER/.<name of game>/` on other *nix operating systems.

The `~/` directory should be used for data written by the game at runtime:
It will have the proper permissions and it is system default.
