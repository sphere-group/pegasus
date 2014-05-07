/*
 * Copyright (c) 2014 The Sphere Team. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
 * FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
 * USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @module playlist
 * @author Jos Kuijpers (Rahkiin)
 *
 * This module is a small demonstration of the fs and sound
 * modules, and the usage of the sound.finished event.
 *
 * A playlist, is, in this case, a folder with music files.
 * Use the path of the folder in the constructor, and an efficient playlist
 * is created. Call play() to start the playlist.
 */

function Playlist(path) {
	this.path = path;
	var paths = [];
	var currentItem = 0;
	var currentSound = null;
	var sound = require("sound");

	// The callback function for the sound.finished event.
	var fn = function() {
		currentItem = (currentItem + 1) % paths.length;
		currentSound = new sound.Sound(paths[currentItem]);
		currentSound.on("finished",fn);
		currentSound.play();
	};
	
	// Load all items in the folder.
	var relPaths = require("fs").list(path);
	for(var p in relPaths) {
		var xp = relPaths[p];
		if(xp[0] == '.')
			continue;
			
		paths.push(path+"/"+xp);
	}
	
	this.play = function() {
		if(currentSound == null) {
			currentSound = new sound.Sound(paths[currentItem]);
			currentSound.on("finished",fn);
		}
		currentSound.play();
	};
	
	this.pause = function() {
		currentSound.pause();
	};
	
	this.stop = function() {
		currentSound.stop();
	};
	
	this.reset = function() {
		stop();
		currentSound.reset();
		currentItem = 0;
	};
}
exports = Playlist;
