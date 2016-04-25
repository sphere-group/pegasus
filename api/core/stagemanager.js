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
 * @module stagemanager
 * @author Andrew Helenius (Radnen)
 */

var stages = [];

/**
 * Runs the stage manager, executing each stages loop callback.
 */
exports.execute = function() {
	for (var i = 0; i < stages.length; ++i) {
		if (stages[i].active)
			stages[i].loop();
	}
}

/**
 * Adds a stage to the internal stage manager.
 *
 * @param {Stage} stage - The stage to add.
 * @return {Stage} The added stage.
 */
exports.add = function(stage) {
	if (!stage.loaded) {
		stage.load();
		stage.loaded = true;
	}

	stage.enter();
	stages.push(stage);
	return stage;
}

/**
 * Removes a stage from the internal stage manager.
 *
 * @param {Stage} stage - The stage to remove.
 * @return {Boolean} Returns true if the stage was successfully removed.
 */
exports.remove = function(stage) {
	for (var i = 0; i < stages.length; ++i) {
		if (stages[i].name == stage.name) {
			stages[i].leave();
			stages.splice(i, 0);
			return true;
		}
	}
	return false;
}

/**
 * Gets the number of stages that are currently active.
 *
 * @return {Number} The number of stages.
 */
exports.count = function() {
	return stages.length;
}

/**
 * Gets the list of current stages.
 *
 * @return {Array} List of all current stages.
 */
exports.getStages = function() {
	return stages;
}

/**
 * Gets the list of currently active stages.
 *
 * @return {Array} List of active stages.
 */
exports.getActive = function() {
	var active = [];
	for (var i = 0; i < stages.length; ++i) {
		if (stages[i].active) active.push(stages[i]);
	}
	return active;
}

/**
 * Gets the stages as a JSON string. Useful for saving a game.
 *
 * @return {String} stages - JSON string of the stage data.
 */
exports.toJSON = function(stages) {
	return JSON.stringify(stages);
}

/**
 * Reintroduces all stages that had been stored as a JSON string.
 *
 * @param {String} data - the stages as a JSON string.
 * @param {Function} reviver - a necessary function to reload/set up stages (it must return a Stage instance).
 * @param {Boolean} append - if true, the loaded stages are added rather than replaced.
 * @return {Boolean} Returns true if the stage was successfully removed.
 */
exports.fromJSON = function(data, reviver, append) {
	if (append === undefined) stages = [];
	var stagedata = JSON.parse(data);
	for (var i = 0; i < stagedata.length; ++i) {
		stages.push(reviver(stagedata[i]));
	}
}
