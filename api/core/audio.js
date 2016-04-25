/*
 * Copyright (c) 2016 The Sphere Team. All rights reserved.
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
 * Sphere 2.0 audio module (Audialis).
 * @module audio
 * @author Bruce Pascoe (Fat Cerberus)
 */

/**
 * Constructs a mixer.
 *
 * Mixers are used for logical grouping of sounds and allow the volume to be
 * set for the entire class.  For example a game might create two mixers:
 * one for music, and the other for sound effects.
 *
 * @constructor
 * @param {Number} frequency - The mixing frequency in Hz.
 * @param {Number} bits - The bit depth at which to play sounds.
 * @param {Number} channels - The number of speaker channels supported by the mixer.
 */
exports.Mixer = function(frequency, bits, channels)
{
	/**
	 * The mixer volume.
	 *
	 * The mixer volume is multiplied with the volume of each individual sounds
	 * to determine how loud each one is.
	 */
	this.volume = 1.0;
}

/**
 * Constructs a Sound object, which represents an audio stream backed by a
 * sound file.  Sounds are fully seekable and the engine automatically keeps
 * the stream fed using audio data from the underlying file.
 *
 * @constructor
 * @param {String} path - The path to the sound file, e.g. `sounds/munch.wav`.
 */
exports.Sound = function(path)
{
	/**
	 * The length of the sound in seconds.
	 *
	 * @type {Number}
	 * @readonly
	 */
	this.length = 0.0;

	/**
	 * The Mixer currently being used to the play the sound. `null` if the
	 * sound is stopped.
	 *
	 * @readonly
	 * @type {Mixer}
	 */
	this.mixer = null;

	/**
	 * The SphereFS path of the sound.
	 *
	 * @readonly
	 * @type {String}
	 */
	this.path = path;

	/**
	 * Gets or sets the sound's L/R balance.
	 *
	 * Ranges from -1.0 to 1.0.
	 *
	 * @type {Number}
	 */
	this.pan = 0.0;

	/**
	 * Whether or not the sound is currently playing.
	 *
	 * @readonly
	 * @type {Boolean}
	 */
	this.playing = false;

	/**
	 * The seek position in the sound, in seconds.
	 *
	 * @type {Number}
	 */
	this.position = 0.0;

	/**
	 * Gets or sets whether the sound will repeat endlessly.
	 *
	 * @type {Boolean}
	 */
	this.repeat = false;

	/**
	 * Gets or sets the volume of the sound.
	 *
	 * 1.0 is full volume, 0.0 is silent. This is multiplied by the mixer
	 * volume to determine the final volume level.
	 *
	 * @type {Number}
	 */
	this.volume = 1.0;

	/**
	 * Gets or sets the pitch of the sound.
	 *
	 * Must not be negative.
	 *
	 * @type {Number}
	 */
	this.pitch = 1.0;

	/**
	 * Start playback of the sound.
	 *
	 * If the sound is already playing, it will be stopped and playback will
	 * begin from 0.0s on the new mixer.
	 *
	 * @param {Mixer} mixer - The mixer which will used to play the sound.
	 */
	this.play = function(mixer) {
		this.mixer = mixer;
		this.playing = true;
	};

	/**
	 * Pauses or resumes playback.
	 *
	 * This method has no effect if the sound is currently stopped.
	 *
	 * @param {Boolean} paused - true to pause, false to resume.
	 */
	this.pause = function(paused) {
		this.playing = !paused;
	};

	/**
	 * Stops playing the sound.
	 *
	 * Seek position is reset to 0.0s so that the next play() will start at the
	 * beginning.
	 */
	this.stop = function() {
		this.playing = false;
		this.position = 0.0;
		this.mixer = null;
	};
}

/**
 * Constructs a SoundStream object. Unlike a Sound, a SoundStream must be kept
 * fed by user code in order to prevent starvation.
 *
 * @constructor
 * @param {Number} frequency - The sample rate of the sound, in Hz.
 * @param {Number} bits - The bit depth of the stream.  8-bit expects unsigned
 *                        samples, 16- and 24-bit are signed, and 32-bit is floating
 *                        point.
 * @param {Number} channels - The number of speaker channels in the sound.
 */
exports.SoundStream = function(frequency, bits, channels)
{
	/**
	 * Begins playing the stream.
	 *
	 * If at any point, the stream doesn't have enough data buffered to keep
	 * playing, playback will stall until more can be buffered.
	 *
	 * @param {Mixer} mixer - The mixer to use to play the sound.
	 */
	this.play = function(mixer)
	{
		this.playing = true;
		this.mixer = mixer;
	};

	/**
	 * Pauses or resumes playback.
	 *
	 * Has no effect is playback is stopped.
	 */
	this.pause = function(paused)
	{
		this.playing = !paused && this.mixer != null;
	};

	/**
	 * Drains the stream buffer and stops playback.
	 */
	this.stop = function()
	{
		this.playing = false;
		this.mixer = null;
	};

	/**
	 * Writes sound data to the stream buffer. The format expected depends on
	 * the arguments passed to the SoundStream constructor.
	 *
	 * @param {ArrayBuffer} data - An ArrayBuffer containing the sound data to buffer.
	 */
	this.buffer = function(data)
	{
		this.bufferSize += data.length;
	}

	/**
	 * Gets whether the stream is currently playing.
	 *
	 * @readonly
	 * @type {Boolean}
	 */
	this.playing = false;

	/**
	 * Gets the number of bytes in the stream buffer.
	 *
	 * @readonly
	 * @type {Number}
	 */
	this.bufferSize = 0;
}
