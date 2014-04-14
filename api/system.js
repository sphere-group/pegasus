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
 * @namespace System
 * @author Jos Kuijpers (Rahkiin)
 */

/**
 * Get the version number of the engine.
 * @static
 */
System.version = 1; // 00.00.01

/**
 * Get the version string of the engine.
 * @static
 */
System.versionString = "Sphere Pegasus 0.0.1";

/**
 * An array of extensions of type System.Extension.
 *
 * The key is the extension point. This is also the string used
 * when importing the module using require().
 *
 * @static
 */
System.extensions = {
	"sqlite" : null
}

/**
 * Abort the current game with a message.
 *
 * @param {String} msg - Message to show after abort.
 * @noreturn
 */
System.abort = function(msg) {
}

/**
 * Exit the game unconditionally.
 *
 * @noreturn
 */
System.exit = function() {
}

/**
 * Get the resolved path of a resource, relative to the
 * the engine or user directory (/ or ~/).
 *
 * This function should use relative paths, because otherwise it
 * would be useless with File().
 *
 * @param {String} query - The resource query.
 * @param {String} [extension=] - The default extension.
 * @param {String} [folder=] - The default folder.
 */
System.resolve = function(query,extension,folder) {
}

/**
 * Try to run the garbage collector.
 *
 * @warning Only use while debugging and use at own risk.
 */
System.Debug.garbageCollect() {
}

/**
 * Name of the extension.
 */
System.Extension.prototype.name = "SQLite";

/**
 * Version number of the extension.
 */
System.Extension.prototype.version = 1;

/**
 * Version string  of the extension.
 */
System.Extension.prototype.versionString = "SQLite 0.0.1";

/**
 * Get the functionality description of the extension.
 *
 * This description is per-extension and can be used to provide
 * information about the functionalities of the plugin,
 * such as whether a specific action is available in this version.
 */
System.Extension.prototype.functionalityDescription = {};
