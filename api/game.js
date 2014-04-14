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
 * @namespace Game
 * @author Jos Kuijpers (Rahkiin)
 */

/**
 * Name of current game.
 * @static
 */
Game.name = "";

/**
 * Description of current game.
 * @static
 */
Game.description = "";

/**
 * Author of current game.
 * @static
 */
Game.author = "";

/**
 * Add a new callback for specified event.
 *
 * @param {String} event - The name of the event.
 * @param {Function} callback - The callback function.
 */
Game.on = function(event, callback) {
	if(Game._callbacks[event] == null)
		Game._callbacks[event] = [];
	Game._callbacks[event].push(callback);
}

/**
 * Trigger an event with given arguments.
 *
 * @param {String} event - The name of the event.
 * @param {Array} arguments - The arguments to the callback.
 */
Game.trigger = function(event, arguments) {
	for(var cb in Game._callbacks[event])
		Game._events[event].push(arguments);
}

/*
 * After reading above functions, you might wonder when the
 * actual callback is called. This is done in the 'doStuff' part
 * of the game loop, if time is free.
 */
