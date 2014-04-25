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
 * @module game
 * @author Jos Kuijpers (Rahkiin)
 */

var _callbacks = {};

/**
 * Name of current game.
 *
 * @type {String}
 */
exports.name = "";

/**
 * Description of current game.
 *
 * @type {String}
 */
exports.description = "";

/**
 * Author of current game.
 *
 * @type {String}
 */
exports.author = "";

/**
 * Add a new callback for specified event.
 *
 * @param {String} event - The name of the event.
 * @param {Function} callback - The callback function.
 */
exports.on = function(event, callback) {
	if(_callbacks[event] == null)
		_callbacks[event] = [];
	_callbacks[event].push(callback);
}

/**
 * Trigger an event with given arguments.
 *
 * @param {String} event - The name of the event.
 * @param {Array} arguments - The arguments to the callback.
 */
exports.trigger = function(event, arguments) {
	var engine = require("engine");

	for(var cb in _callbacks[event]) {
		engine.dispatch(function () {
			cb.call(arguments);
		});
	}
}

/*
 * After reading above functions, you might wonder when the
 * actual callback is called. This is done in the 'doStuff' part
 * of the game loop, if time is free.
 */
