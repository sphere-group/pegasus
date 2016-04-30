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
 * @module graphics/color
 * @author Jos Kuijpers (Rahkiin)
 */

export default class Color {
    /**
     * Create a new color.
     *
     * @constructor
     * @param {Number} r - Red value, ranging 0.0 to 1.0.
     * @param {Number} g - Green value, ranging 0.0 to 1.0.
     * @param {Number} b - Blue value, ranging 0.0 to 1.0.
     * @param {Number} [a=1.0] - Alpha value, ranging 0.0 to 1.0.
     */
    constructor(public red: number, public green: number, public blue: number, public alpha?: number) {
        this.alpha = this.alpha || 1.0;
    }

    /**
     * Blend the color evenly with specified color.
     *
     * @param {Color} color - The color to blend with.
     * @return {Color} The new color.
     */
    public blend(color: Color): Color {
        return null;
    }

    /**
     * Blend the color weighted with specified color.
     *
     * @param {Color} color - The color to blend with.
     * @param {Number} weight1 - The weight for the 'this' color, ranging 0.0 to 1.0.
     * @param {Number} weight2 - The weight for the specified color, ranging 0.0 to 1.0.
     * @return {Color} The new color.
     */
    public blendWeighted(color: Color, weight1: number, weight2: number): Color {
        return null;
    }

    /**
     * Red color: (1.0, 0, 0)
     *
     * @const
     */
    public static RED: Color = new Color(1.0, 0, 0);

    /**
     * Green color: (0, 1.0, 0)
     *
     * @const
     */
    public static GREEN: Color = new Color(0, 1.0, 0);

    /**
     * Blue color: (0, 0, 1.0)
     *
     * @const
     */
    public static BLUE: Color = new Color(0, 0, 1.0);

    /**
     * Black color: (0, 0, 0)
     *
     * @const
     */
    public static BLACK: Color = new Color(0, 0, 0);

    /**
     * Gray color: (0.5, 0.5, 0.5)
     *
     * @const
     */
    public static GRAY: Color = new Color(0.5, 0.5, 0.5);

    /**
     * Dark gray color: (85, 85, 85)
     *
     * @const
     */
    public static DARKGRAY: Color = new Color(0.333, 0.333, 0.333);

    /**
     * Light gray color: (170, 170, 170)
     *
     * @const
     */
    public static LIGHTGRAY: Color = new Color(0.666, 0.666, 0.666);


    /**
     * White color: (1.0, 1.0, 1.0)
     *
     * @const
     */
    public static WHITE: Color = new Color(1.0, 1.0, 1.0);

    /**
     * Yellow color: (1.0, 1.0, 0)
     *
     * @const
     */
    public static YELLOW: Color = new Color(1.0, 1.0, 0);

    /**
     * Purple color: (1.0, 0, 1.0)
     *
     * @const
     */
    public static PURPLE: Color = new Color(1.0, 0, 1.0);

    /**
     * Cyan color: (0, 1.0, 1.0)
     *
     * @const
     */
    public static CYAN: Color = new Color(0, 1.0, 1.0);

}
