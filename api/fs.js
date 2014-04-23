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
 * @module fs
 * @author Jos Kuijpers (Rahkiin)
 */

/**
 * List the contents of the specified directory.
 *
 * @param {String} path - Directory to list. If path is points to a file,
 * list only that file. Just like bash ls.
 * @return {Array<String>} List of items as relative paths to path.
 */
exports.list = function (path) {
};

/**
 * Create a directory at given location.
 *
 * @param {String} path - Path for the directory.
 * @return {Directort} A new Directory object on success, null on failure.
 */
exports.makeDirectory = function (path) {
};

/**
 * Remove a file or directory.
 *
 * @param {String} path - Path of the item.
 * @return {Boolean} true on success, false on failure.
 */
exports.remove = function (path) {
};

/**
 * Rename or move a file or directory.
 *
 * @param {String} path - Current path.
 * @param {String} newPath - New path.
 */
exports.rename = function (path, newPath) {
};

/**
 * Check if a file or directory exists.
 *
 * @param {String} path - Path of the item.
 * @return {Boolean} true if it exists, false otherwise.
 */
exports.exists = function (path) {
	return fs.exists(path);
};

/**
 * Get the MD5 hash of a file.
 *
 * This function should try to be as nice as possible:
 * try not to load the whole file into memory at once.
 *
 * @param {String} path - The path of the file.
 * @return {String} MD5 string, or null on failure.
 */
exports.md5 = function (path) {
};

/**
 * Get the SHA1 hash of a file.
 *
 * This function should try to be as nice as possible:
 * try not to load the whole file into memory at once.
 *
 * @param {String} path - The path of the file.
 * @return {String} SHA1 string, or null on failure.
 */
exports.sha1 = function (path) {
};

/**
 * Get the SHA256 hash of a file.
 *
 * This function should try to be as nice as possible:
 * try not to load the whole file into memory at once.
 *
 * @param {String} path - The path of the file.
 * @return {String} SHA256 string, or null on failure.
 */
exports.sha256 = function (path) {
};

/**
 * A directory representation.
 *
 * Using 'new Directory()' does NOT create a new directory
 * on the file system. Use fs.makeDirectory() instead.
 *
 * @constructor
 * @param {String} path - Path of the existing directory.
 */
function Directory(path) {
	/**
	 * The path of the directory.
	 *
	 * You can change the path by calling rename().
	 *
	 * @readonly
	 * @type {String}
	 */
	this.path = path;

	/**
	 * List the contents of this directory.
	 *
	 * @return {Array<String>} array of relative paths, or null on failure.
	 */
	this.list = function () {
	};

	/**
	 * Rename this directory.
	 *
	 * @param {String} path - The new name or location.
	 * @return {Boolean} true on success, false otherwise.
	 */
	this.rename = function (path) {
		if(true)
			this.path = path;
	};

	/**
	 * Remove this directory from the file system
	 *
	 * After a successfull call, this Directory object is invalid.
	 *
	 * @return {Boolean} true on success, false on failure.
	 */
	this.remove = function () {
		if(true)
			this.path = null;
	};
}
exports.Directory = Directory;

/**
 * A textual key-value file.
 *
 * The file is created, if non-existent, in a call to save().
 *
 * @constructor
 * @param {String} path - Path of the file.
 */
function File(path) {
	/**
	 * Path of this file.
	 *
	 * You can change the path by calling rename().
	 *
	 * @readonly
	 * @type {String}
	 */
	this.path = path;

	/**
	 * The number of key-value pairs in the file.
	 *
	 * @readonly
	 * @type {Number}
	 */
	this.length = 0;

	/**
	 * Save the current file.
	 *
	 * If no file exists, it is created.
	 * If a file exists, it is overwritten.
	 *
	 * @return {Boolean} true on success, false otherwise.
	 */
	this.save = function () {
	};

	/**
	 * Get the MD5 hash of the file.
	 *
	 * @return {String} MD5 string, or null on failure.
	 */
	this.md5 = function () {
	};

	/**
	 * Get the SHA1 hash of the file.
	 *
	 * @return {String} SHA1 string, or null on failure.
	 */
	this.sha1 = function () {
	};

	/**
	 * Get the SHA256 hash of the file.
	 *
	 * @return {String} SHA256 string, or null on failure.
	 */
	this.sha256 = function () {
	};

	/**
	 * Rename or move this file.
	 *
	 * @param {String} path - The new path.
	 * @return {Boolean} true on success, false otherwise.
	 */
	this.rename = function (path) {
		if(true)
			this.path = path;
	};

	/**
	 * Remove this file.
	 *
	 * After a successfull call, this File object is invalid.
	 *
	 * @return {Boolean} true on success, false otherwise.
	 */
	this.remove = function () {
		if(true)
			this.path = null;
	};
}
exports.File = File;
