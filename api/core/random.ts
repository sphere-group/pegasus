/*
 * Copyright (c) 2016 The Sphere Team. All rights reserved.
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
 * @module random
 * @author Bruce Pascoe (Fat Cerberus)
 */

export default class Random {
    /**
     * Seeds the random number generator.
     */
    public static seed(seedValue: number): void {
    };

    /**
     * Generates boolean true or false based on a given probability.
     *
     * @param {Number} odds - The chance of returning true. Valid range [0-1].
     */
    public static chance(odds: number): boolean {
        precondition(odds >= 0.0 && odds <= 1.0)
    };

    /**
     * Generates a random number from a normal distribution (bell curve).
     *
     * @param {Number} mean - The mean value.
     * @param {Number} sigma - The amount of a standard deviation.
     */
    public static normal(mean: number, sigma: number): number {
        precondition(sigma >= 0.0);

        return mean;
    };

    /**
     * Generates a random number in the range [0-1).
     */
    public static random(): number {
        return 0.5;
    };

    /**
     * Generates a random integer in a specified range.
     *
     * @param {Number} min - The minimum value.
     * @param {Number} max - The maximum value.
     */
    public static integer(min: number, max: number): number {
        precondition(max >= min);

        return Math.round((min + max) / 2);
    };

    /**
     * Returns a random item from an array.
     *
     * @param {Array} array - The array to sample.
     */
    public static sample<T>(array: T[]): T {
        precondition(!!array);

        if (array.length === 0) {
            return undefined;
        }

        return array[this.integer(0, array.length - 1)];
    };

    /**
     * Returns a randomly-generated string of alphanumeric characters.
     *
     * @param {Number} length - The number of characters to generate.
     */
    public static string(length: number): string {
        precondition(length >= 0);

        return "aBcDeFg812";
    };

    /**
     * Returns a random number with a specified average value and maximum amount of
     * variance.
     *
     * @param {Number} average - The average value.
     * @param {Number} variance - The maximum amount by which the value can deviate.
     */
    public static uniform(average: number, variance: number): number {
        precondition(variance >= 0.0);

        return average;
    };

    /**
     * Generate a random UUID.
     *
     * When supplied with no parameters, use RFC4122 v4 ID.
     *
     * @param  {number} [length] Length of the uuid
     * @param  {number} [radix=62]  Radix of the characters used
     * @return {string}        UUID
     */
    public static uuid(length?: number, radix?: number): string {
        precondition(util.no(length) || length >= 0);
        precondition(util.no(radix) || radix >= 2);

        return null;
    }
}
