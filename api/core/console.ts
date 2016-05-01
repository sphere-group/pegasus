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
 * @module console
 * @author Jos Kuijpers (Rahkiin)
 *
 * @ref http://wiki.commonjs.org/wiki/Console
 */

export default class Console {
    /**
     * logs a message to with visual "log" representation allowing user to distinguish
     * form other message types. You may pass as many arguments as you'd like, and they
     * will be joined together in a space-delimited line.
     *
     * The first argument may be a printf-like pattern string.
     *
     * Both techniques can be combined.
     *
     * @param {any[]} args
     * arguments are joined together with spaces.
     * @noreturn
     */
    public static log(...args: any[]): void {
    }

    /**
     * Logs a message, with a visual "debug" representation. Optionally includes an
     * info of a caller (file, line where it was called from).
     *
     * @param {any[]} ...args [description]
     */
    public static debug(...args: any[]): void {
    }

    /**
     * Logs a message with the visual "info" representation. Optionally includes an
     * info of a caller (file, line where it was called from).
     *
     * @param {any[]} ...args [description]
     */
    public static info(...args: any[]): void {
    }

    /**
     * Logs a message with the visual "warning" representation. Optionally includes an
     * info of a caller (file, line where it was called from).
     *
     * @param {any[]} ...args [description]
     */
    public static warn(...args: any[]): void {
    }

    /**
     * Logs a message with the visual "error" representation. Optionally includes an
     * info of a caller (file, line where it was called from).
     *
     * @param {any[]} ...args [description]
     */
    public static error(...args: any[]): void {
    }

    /**
     * Logs a static / interactive listing of all properties of the object.
     *
     * @param {any} object [description]
     */
    public static dir(object: any): void {
    }

    /**
     * Logs a static / interactive stack trace of JavaScript execution at the point where it is called.
     */
    public static trace(): void {
    }

    /**
     * Logs a message to and opens a nested block to indent all future messages sent.
     *
     * @param {any[]} ...args Optional log value
     */
    public static group(...args: any[]): void {
    }

    /**
     * Closes the most recently opened block created by a call to require("console").group()
     */
    public static unGroup(): void {
    }

    /**
     * Creates a new timer under the given name. Call require("console").timeEnd(name) with
     * the same name to stop the timer and log the time elapsed..
     *
     * @param {string} name [description]
     */
    public static time(name: string): void {
    }

    /**
     * Stops a timer created by a call to require("console").time(name) and logs the time elapsed.
     *
     * @param {string} name [description]
     */
    public static timeEnd(name: string): void {
    }
}
