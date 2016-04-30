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
 * @module assert
 * @author Jos Kuijpers (Rahkiin)
 *
 * @refhttp://wiki.commonjs.org/wiki/Unit_Testing/1.0
 *
 * @note
 * Test whether a value is truthy using !!guard and falsy using !guard.
 */

export default class Assert {

    public static ok(guard: any, message?: string): void {
        return this.equal(guard, true, message);
    }

    // Test using ==
    public static equal(actual: any, expected: any, message?: string): void {
    }

    // Test using !=
    public static notEqual(actual: any, expected: any, message?: string): void {
    }

    /*
     * 1) All identical values are equivalent, as determined by ===.
     * 2) If the expected value is a Date object, the actual value is equivalent if it is also a Date object
     *    that refers to the same time.
     * 3) Other pairs that do not both pass typeof value == "object", equivalence is determined by ==.
     * 4) or all other Object pairs, including Array objects, equivalence is determined by having the same
     *    number of owned properties (as verified with Object.prototype.hasOwnProperty.call), the same set
     *    of keys (although not necessarily the same order), equivalent values for every corresponding key,
     *    and an identical "prototype" property. Note: this accounts for both named and indexed properties on Arrays.
     */
    public static deepEqual(actual: any, expected: any, message?: string): void {
    }

    // !deepEqual
    public static notDeepEqual(actual: any, expected: any, message?: string): void {
    }

    // Test using ===
    public static strictEqual(actual: any, expected: any, message?: string): void {
    }

    // Test using !==
    public static notStrictEqual(actual: any, expected: any, message?: string): void {
    }

    public static throws(block: Function, error?: Error, message?: string): void {
    }

    public static doesNotThrow(block: Function, error?: Error, message?: string): void {
    }
}

export class AssertionError extends Error {
    /**
     * Construct a new AssertionError.
     *
     * map:
     *     actual
     *     expected
     *     message
     *
     * @constructor
     * @param {Map} options [description]
     */
    constructor(options: Map) {
        super();
    }
}
