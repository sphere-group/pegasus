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
 * @module stage
 * @author Andrew Helenius (Radnen)
 */

var Manager = require("stagemanager.js");

/**
 * Create a new color.
 *
 * @constructor
 * @param {String} name - The name of the stage for logging/id/debug purposes.
 */
function Stage(name) {
	this.name = name;
	this.loaded = false;
	this.active = true;
}

/**
 * Overload this callback to load data when the stage appears.
 */
Stage.prototype.load = function() {

}

/**
 * Overload this callback to run your game logic for this stage.
 */
Stage.prototype.loop = function() {
	// Author Note: should we split this up into separate update/render callbacks?
}

/**
 * Overload this callback to do some initializing when the stage appears.
 */
Stage.prototype.enter = function() {

}

/**
 * Overload this callback to do some cleaning when the stage is removed. 
 */
Stage.prototype.leave = function() {

}

/**
 * Get the loaded status of this stage.
 *
 * @return {Boolean} Returns true if the stage has been loaded, false otherwise.
 */
Stage.prototype.isLoaded = function() {
	return this.loaded;
}

/**
 * Conveniently adds this stage to the internal stage manager.
 */
Stage.prototype.add = function() {
	Manager.add(this);
}

/**
 * Conveniently removes this stage from the internal stage manager.
 */
Stage.prototype.remove = function() {
	Manager.remove(this);
}

/**
 * Stops the execution of this stages loop callback.
 */
Stage.prototype.pause = function() {
	this.active = false;
}

/**
 * Resumes the execution of this stages loop callback.
 */
Stage.prototype.resume = function() {
	this.active = true;
}

exports.Stage = Stage;

/**
 * Adds a stage to the internal stage manager.
 *
 * @param {Stage} The stage object to add.
 */
exports.addStage = function(stage) {
	Manager.add(stage);
}

/**
 * Removes a stage from the internal stage manager.
 *
 * @param {Stage} The stage object to remove.
 */
exports.removeStage = function(stage) {
	Manager.remove(stage);
}

