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

"use strict";

// Prevent using an overridden toString()
function objectToString(object) {
	return Object.prototype.toString.call(object);
}

exports.isArray = Array.isArray;

/**
 * Get whethet specified value is a boolean.
 *
 * @param arg - The value.
 * @return {Boolean} true if the argument is a boolean, false otherwise.
 */
exports.isBoolean = function (arg) {
	return typeof arg === "boolean";
};

/**
 * Get whethet specified value is null.
 *
 * @param arg - The value.
 * @return {Boolean} true if the argument is null, false otherwise.
 */
exports.isNull = function (arg) {
	return arg === null;
};

/**
 * Get whethet specified value is null or undefined.
 *
 * @param arg - The value.
 * @return {Boolean} true if the argument is null or undefined, false otherwise.
 */
exports.isNullOrUndefined = function (arg) {
	return arg == null;
};

/**
 * Get whethet specified value is a number.
 *
 * @param arg - The value.
 * @return {Boolean} true if the argument is a number, false otherwise.
 */
exports.isNumber = function (arg) {
	return typeof arg === "number";
};

/**
 * Get whethet specified value is a string.
 *
 * @param arg - The value.
 * @return {Boolean} true if the argument is a string, false otherwise.
 */
exports.isString = function (arg) {
	return typeof arg === "string";
};

/**
 * Get whethet specified value is undefined.
 *
 * @param arg - The value.
 * @return {Boolean} true if the argument is undefined, false otherwise.
 */
exports.isUndefined = function (arg) {
	return arg === void 0;
};

/**
 * Get whethet specified value is a regular expression.
 *
 * @param arg - The value.
 * @return {Boolean} true if the argument is a regular expression, false otherwise.
 */
exports.isRegExp = function (arg) {
	return isObject(arg) && objectToString(arg) === "[object RegExp]";
};

/**
 * Get whethet specified value is an object.
 *
 * @param arg - The value.
 * @return {Boolean} true if the argument is an object, false otherwise.
 */
function isObject(arg) {
	return typeof arg === "object" && arg !== null;
};
exports.isObject = isObject;

/**
 * Get whethet specified value is a date.
 *
 * @param arg - The value.
 * @return {Boolean} true if the argument is a date, false otherwise.
 */
exports.isDate = function (arg) {
	return isObject(arg) && objectToString(arg) === "[object Date]";
};

/**
 * Get whethet specified value is an error.
 *
 * @param arg - The value.
 * @return {Boolean} true if the argument is an error, false otherwise.
 */
exports.isError = function (arg) {
	return isObject(arg) && (objectToString(arg) === "[object Error]" || arg instanceof Error);
};

/**
 * Get whethet specified value is a function.
 *
 * @param arg - The value.
 * @return {Boolean} true if the argument is a function, false otherwise.
 */
exports.isFunction = function (arg) {
	return typeof arg === "function";
};

/**
 * Get whethet specified value is a buffer.
 *
 * @param arg - The value.
 * @return {Boolean} true if the argument is a buffer, false otherwise.
 */
exports.isBuffer = function (arg) {
	return arg instanceof Buffer;
};

/**
 * Make a function inherit from another function.
 *
 * @param {Function} constructor - The constructor that will inherit.
 * @param {Function} superConstructor - The constructor that will be inherited from.
 */
exports.inherits = function (constructor, superConstructor) {
	constructor.super_ = superConstructor;
	constructor.prototype = Object.create(superConstructor.prototype, {
		constructor: {
			value: constructor,
			enumarable: false,
			writable: true,
			configurable: true
		}
	});
};
