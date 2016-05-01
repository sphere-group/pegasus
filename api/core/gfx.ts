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
 * Graphics module
 * @module gfx
 * @author Bruce Pascoe (Fat Cerberus) and Jos Kuijpers (Rahkiin)
 */

export default class Gfx {

    /**
     * Set or get the frameRate for throttling of flip().
     *
     * Set to 0 to disable throttling.
     *
     * @type {number}
     */
    public static frameRate: number;

    /**
     * Get the drawing target.
     *
     * @readonly
     * @type {Surface}
     */
    public static screen: Surface;

    /**
     * Flip the doublebuffer to the screen.
     */
    public static flip(): void {
    }

    /**
     * Set the resolution of the target drawing area.
     *
     * @param {number} width  A positive integer.
     * @param {number} height A positibe integer.
     */
    public static setResolution(width: number, height: number): void {

    }
}

/**
 * A color abstraction with utility functions.
 */
export class Color {

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
        return this.blendWeighted(color, 0.5, 0.5);
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
     * Get a copy of this color.
     *
     * @return {Color} New copy.
     */
    public clone(): Color {
        return new Color(this.red, this.green, this.blue, this.alpha);
    }

    /**
     * Transform the color using a colormatrix.
     *
     * @param  {ColorMatrix} matrix The matrix.
     * @return {Color}              The new color.
     */
    public transform(matrix: ColorMatrix): Color {
        return this;
    }
}

export class ColorMatrix {
    public rn: number;
    public rr: number;
    public rg: number;
    public rb: number;

    public gn: number;
    public gr: number;
    public gg: number;
    public gb: number;

    public bn: number;
    public br: number;
    public bg: number;
    public bb: number;
}

/**
 * A group of shapes.
 */
export class Group {
    /**
     * Shader on the group.
     *
     * @type {Shader}
     */
    public shader: Shader;

    /**
     * The transform.
     *
     * @type {Transform}
     */
    public transform: Transform;

    constructor(public shapes: Shape[]) {
    }

    /**
     * Draw the group.
     *
     * @param {Surface} [target] Target to draw onto.
     */
    public draw(target?: Surface) {
    }
}

export class Image {
    /**
     * Width of the image.
     *
     * @readonly
     * @type {number}
     */
    public width: number;

    /**
     * Height of the image.
     *
     * @readonly
     * @type {number}
     */
    public height: number;

    constructor(public filename: string) {
    }
}

export interface IShaderOptions {
    /**
     * Filename of the vertex shader
     * @type {string}
     */
    vertex: string;

    /**
     * Filename of the fragment shader
     * @type {string}
     */
    fragment: string;
}

export class Shader {

    /**
     * Create a new shader.
     *
     * @constructor
     * @param {IShaderOptions} options [description]
     */
    constructor(options: IShaderOptions) {

    }
}

export class Shape {
    // getset texture

    constructor() {
    }

    public draw(target?: Surface, matrix?: Transform, shader?: Shader): void {
    }
}

/**
 * Drawable surface.
 */
export class Surface {
    /**
     * Width of surface.
     *
     * @readonly
     * @type {number}
     */
    public width: number;

    /**
     * Height of surface.
     *
     * @readonly
     * @type {number}
     */
    public height: number;

    /**
     * [constructor description]
     * @param {number} public width  Width of surface.
     * @param {number} public height Height of surface.
     */
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    /**
     * Get an image of the surface.
     *
     * @return {Image} [description]
     */
    public toImage(): Image {
        return null;
    }
}

export class Transform {

    constructor() {
    }

    public compose(other: Transform): void {

    }

    public identity(): void {

    }

    public rotate(theta: number): void {

    }

    public scale(sx: number, sy: number): void {

    }

    public translate(tx: number, ty: number) {

    }

    /**
     * Get an independent copy of this Transform.
     *
     * @return {Transform} [description]
     */
    public clone(): Transform {
        return this;
    }
}
