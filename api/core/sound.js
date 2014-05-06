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
 * @module sound
 * @author Jos Kuijpers (Rahkiin)
 */

/**
 * The master volume.
 *
 * 0.0 is 0%, 1.0 is 100%.
 *
 * @type {Number}
 */
exports.volume = 1.0;

/**
 * Stop playback of any sound.
 */
exports.stop = function() {
};

/**
 * A song to play.
 *
 * @constructor
 * @param {String} path - The path of the song.
 */
function Sound(path) {
	/**
	 * The path of the song.
	 *
	 * @readonly
	 * @type {String}
	 */
	this.path = path;

	/**
	 * Whether this song must repeat.
	 *
	 * @type {Boolean}
	 */
	this.repeat = false;

	/**
	 * Whether the song is playing.
	 *
	 * @type {Boolean}
	 * @readonly
	 */
	this.playing = false;

	/**
	 * The length of the sound in seconds.
	 *
	 * @type {Number}
	 * @readonly
	 */
	this.length = 0.0;

	/**
	 * The seek position in the sound, in seconds.
	 *
	 * @type {Number}
	 */
	this.position = 0.0;

	/**
	 * The volume of this sound.
	 *
	 * 1.0 is 100%, 0.0 is 0%. The volume gets multiplied by the 
	 * master volume.
	 *
	 * @type {Number}
	 */
	this.volume = 1.0;

	/**
	 * Pan of the sound.
	 *
	 * Ranging -1.0 to 1.0.
	 *
	 * @type {Number}
	 */
	this.pan = 0.0;

	/**
	 * Pitch of the sound.
	 *
	 * Ranging -1.0 to 1.0.
	 *
	 * @type {Number}
	 */
	this.pitch = 1.0;

	/**
	 * Start playback of the sound.
	 */
	this.play = function() {
		this.playing = true;
	};

	/**
	 * Pauses playback.
	 */
	this.pause = function() {
		if(!this.playing)
			throw new Error();
		this.playing = false;
	};

	/**
	 * Stops playing the sound.
	 */
	this.stop = function() {
		if(!this.playing)
			throw new Error();
		this.playing = false;
	};

	/**
	 * Resets playback.
	 */
	this.reset = function() {
		this.position = 0.0;
	};
}
exports.Sound = Sound;

/**
 * A sound effect.
 *
 * @constructor
 * @param {String} path - Path of the sound effect.
 * @param {Boolean} [multiple=false] - Whether to allow multiple streams at a time.
 */
function SoundEffect(path, multiple) {
	/**
	 * The path of the song.
	 *
	 * @readonly
	 * @type {String}
	 */
	this.path = path;

	/**
	 * Whether to allow multiple streams at a time.
	 *
	 * @readonly
	 * @type {Boolean}
	 */
	this.multiple = multiple || false;

	/**
	 * The volume of this sound.
	 *
	 * 1.0 is 100%, 0.0 is 0%. The volume gets multiplied by the 
	 * master volume.
	 *
	 * @type {Number}
	 */
	this.volume = 1.0;

	/**
	 * Pan of the sound.
	 *
	 * Ranging -1.0 to 1.0.
	 *
	 * @type {Number}
	 */
	this.pan = 0.0;

	/**
	 * Pitch of the sound.
	 *
	 * Ranging -1.0 to 1.0.
	 *
	 * @type {Number}
	 */
	this.pitch = 1.0;

	/**
	 * Start playback of the sound.
	 *
	 * If multiple==false, stops the current playback first.
	 */
	this.play = function() {
	};

	/**
	 * Stops playing any streams of this sound.
	 */
	this.stop = function() {
	};
}
exports.SoundEffect = SoundEffect;
