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

export default class Util {

	public static isArray = Array.isArray;

	/**
	 * Get whether specified value is a boolean.
	 *
	 * @param arg - The value.
	 * @return {Boolean} true if the argument is a boolean, false otherwise.
	 */
	public static isBoolean(arg: any): boolean {
		return typeof arg === "boolean";
	}

	/**
	 * Get whether specified value is null.
	 *
	 * @param arg - The value.
	 * @return {Boolean} true if the argument is null, false otherwise.
	 */
    public static isNull(arg: any): boolean {
		return (arg) === null;
	}

	/**
	 * Get whether specified value is null or undefined.
	 *
	 * @param arg - The value.
	 * @return {Boolean} true if the argument is null or undefined, false otherwise.
	 */
    public static isNullOrUndefined(arg: any): boolean {
		return arg === null || arg === undefined;
	}

	/**
	 * Get whethet specified value is a number.
	 *
	 * @param arg - The value.
	 * @return {Boolean} true if the argument is a number, false otherwise.
	 */
    public static isNumber(arg: any): boolean {
		return typeof arg === "number";
	}

	/**
	 * Get whether specified value is a string.
	 *
	 * @param arg - The value.
	 * @return {Boolean} true if the argument is a string, false otherwise.
	 */
    public static isString(arg: any): boolean {
		return typeof arg === "string";
	}

	/**
	 * Get whether specified value is undefined.
	 *
	 * @param arg - The value.
	 * @return {Boolean} true if the argument is undefined, false otherwise.
	 */
    public static isUndefined(arg: any): boolean {
		return arg === void 0;
	}

	/**
	 * Get whether specified value is a regular expression.
	 *
	 * @param arg - The value.
	 * @return {Boolean} true if the argument is a regular expression, false otherwise.
	 */
    public static isRegExp(arg: any): boolean {
		return this.isObject(arg) && objectToString(arg) === "[object RegExp]";
	}

	/**
	 * Get whether specified value is an object.
	 *
	 * @param arg - The value.
	 * @return {Boolean} true if the argument is an object, false otherwise.
	 */
    public static isObject(arg: any): boolean {
    	return typeof arg === "object" && arg !== null;
	}

	/**
	 * Get whether specified value is a date.
	 *
	 * @param arg - The value.
	 * @return {Boolean} true if the argument is a date, false otherwise.
	 */
    public static isDate(arg: any): boolean {
		return this.isObject(arg) && objectToString(arg) === "[object Date]";
	};

	/**
	 * Get whether specified value is an error.
	 *
	 * @param arg - The value.
	 * @return {Boolean} true if the argument is an error, false otherwise.
	 */
    public static isError(arg: any): boolean {
		return this.isObject(arg) && (objectToString(arg) === "[object Error]" || arg instanceof Error);
	};

	/**
	 * Get whether specified value is a function.
	 *
	 * @param arg - The value.
	 * @return {Boolean} true if the argument is a function, false otherwise.
	 */
    public static isFunction(arg: any): boolean {
		return typeof arg === "function";
	};

	/**
	 * Get whether specified value is a symbol.
	 *
	 * @param arg - The value.
	 * @return {Boolean} true if the argument is a symbol, false otherwise.
	 */
    public static isSymbol(arg: any): boolean {
		return typeof arg === "symbol";
	};

	public static isPrimitive(arg: any): boolean {
		return arg === null || (typeof arg !== "object" && typeof arg !== "function")
	}

	/**
	 * Make a function inherit from another function.
	 *
	 * @param {Function} constructor - The constructor that will inherit.
	 * @param {Function} superConstructor - The constructor that will be inherited from.
	 */
    public static inherits(constructor: Function, superConstructor: Function): void {
		(<any>constructor).super_ = superConstructor;
		constructor.prototype = Object.create(superConstructor.prototype, {
			constructor: {
				value: constructor,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
	};
}
