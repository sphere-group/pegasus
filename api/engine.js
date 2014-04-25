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
 * @module engine
 * @author Jos Kuijpers (Rahkiin)
 */

/**
 * Get the version number of the engine.
 *
 * @readonly
 * @type {Number}
 */
exports.version = 1; // 00.00.01

/**
 * Get an object with version strings for the engine
 * and its dependencies.
 *
 * @readonly
 * @type {Object}
 */
exports.versions = {
	"sphere": "2.0.0",
	"spidermonkey": "1.8"
};

/**
 * The main module.
 *
 * @readonly
 * @type {Module}
 */
exports.mainModule = null;

/**
 * An array of loaded extensions.
 *
 * The key is the extension point. This is also the string used
 * when importing the module using require().
 *
 * @static
 */
exports.extensions = []
	"sqlite"
];

/**
 * Abort the current game with a message.
 *
 * @param {String} msg - Message to show after abort.
 * @noreturn
 */
exports.abort = function(msg) {
};

/**
 * Exit the game unconditionally.
 *
 * @noreturn
 */
exports.exit = function() {
};

/**
 * Restart the engine.
 *
 * @noreturn
 */
exports.restart = function() {
};

/**
 * Put the specified function onto the dispatch queue,
 * to be executed in an upcoming cycle.
 *
 * Use this to assert execution order when mixing
 * sync and async functionality. Or to minimize frame-lag.
 *
 * @param {Function} fn - The function to execute.
 */
exports.dispatch = function(fn) {
};
