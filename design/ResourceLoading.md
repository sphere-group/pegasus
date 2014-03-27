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
```
