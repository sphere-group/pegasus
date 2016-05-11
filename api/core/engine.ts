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

export default class Engine {

    /**
     * Get the API level.
     *
     * An Android-ish approach.  The API level increases whenever new features
     * are added to the core Pegasus standard.
     *
     * @readonly
     * @type {Number}
     */
    public static apiLevel: number = 1;

    /**
     * Get the name of the engine.
     *
     * @readonly
     * @type {String}
     */
    public static name: string = "minisphere";

    /**
     * Get an object with version strings for the engine
     * and its dependencies.
     *
     * @readonly
     * @type {Object}
     */
    public static versions: Map = {
        "sphere": "2.0.0",
        "spidermonkey": "1.8"
    };

    /**
     * Get the extensions supported by the engine.
     *
     * If an extension is supported, then `extensions.ext_name` will be equal
     * to true.  Unsupported extensions will simply not be present in the map.
     *
     * @static
     */
    public static extensions: Map = {
        "sphere_fs_absolute_path": true,
        "sphere_fs_system_alias": true,
    };

    /**
     * Abort the current game with a message.
     *
     * @param {String} msg - Message to show after abort.
     * @noreturn
     */
    public static abort(msg?: string): void {
    }

    /**
     * Exit the game unconditionally.
     *
     * @noreturn
     */
    public static exit(): void {
    }

    /**
     * Restart the engine.
     *
     * @noreturn
     */
    public static restart(): void {
    }

    /**
     * Sleep for a set amount of time.
     *
     * This will put the engine in an idle state.  No JavaScript code will be
     * executed until the timeout expires.
     *
     * @param {number} time - Time to sleep in seconds.  Fractional values are
     *                        allowed, e.g. 1.5.
     */
    public static sleep(time: number): void {
        time = Math.max(time, 0.0);
    }
}
