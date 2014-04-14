Resource Loading
================

| Type            | Stage       |
|-----------------|-------------|
| Design document | Researching |


### Abstract ###
This document covers the loading of resources. Attention is given to path resolving
and default values of missing parameters.

### Terminology ###
Resource: Any file loadable by a Pegasus complying engine. This includes images,
fonts, spritesets, maps, sounds but also scripts.

### Directory layout ###
See DirectoryLayout.md.
TODO

### Path resolving ###
TODO

```js
function resolve(path, defaultExtension, defaultFolder) {
	bool home, bool local

	if(! path has extension && defaultExtension)
		add extension

	split at separator
	if( prefix is .)
		set is local, remove first
	if prefix is ~
		set is home, remove first

	if(home)
		return comp. joined prefixed with user path

	if(local)
		return comp joined prefixed with curr location

	1 look in ./path
	2 look in current package / defaultfolder / path
		current package being either library or game
	3 look in current package / path
	4 look in libraries / * / defaultFolder / path
	5 look in libraries / * / path
	6 look in system/defaultFolder / path
	7 look in system / path
	8 return nil
}
```

Example 1: Font loading
```js
path = resolve('pacman','jfn','fonts');

// Results in either:
// /system/fonts/pacman.jfn
// /game/fonts/pacman.jfn
// /game/libraries/<any>/fonts/pacman.jfn
// ./pacman.jfn
// /system/pacman.jfn
// /game/pacman.jfn
// /game/libraries/<any>/pacman.jfn
```
