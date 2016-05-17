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
 * @module graphics
 * @author Bruce Pascoe (Fat Cerberus) and Jos Kuijpers (Rahkiin)
 */

export default class GraphicsModule {

    /**
     * Set or get the frameRate for throttling of flip().
     *
     * Set to 0 to disable throttling.
     *
     * @type {number}
     */
    public static frameRate: number;

    /**
     * Get the default render target (the backbuffer).
     *
     * @readonly
     * @type {Surface}
     */
    public static screen: Surface;

    /**
     * Flip the backbuffer to the screen.
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
     * Blend the color with another using linear interpolation.
     * All color channels are interpolated, included the alpha channel.
     *
     * @param {Color} color2 - The color to blend with.
     * @param {number} alpha - The alpha value to use for blending. Ranges [0-1].
     * @return {Color} The new color.
     */
    public blend(color2: Color, alpha: number): Color {
        return this.blendWeighted(color, 0.5, 0.5);
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
     * Transform the color using matrix multiplication.
     *
     * The alpha component is ignored and the matrix is calculated as though
     * alpha = 1.0.
     *
     * @param  {Transform} transform The Transform to use.
     * @return {Color}               The new color.
     */
    public transform(transform: Transform): Color {
        return this;
    }
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
     * The Group's transformation matrix.
     *
     * @type {Transform}
     */
    public transform: Transform;

    constructor(public shapes: Shape[]) {
    }

    /**
     * Draw the group.
     *
     * @param {Surface} target - The Surface to draw to.
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
     * Create an Image from the surface contents.
     *
     * Note that modifying the surface contents after this is called will not
     * affect the generated image.
     *
     * @return {Image} [description]
     */
    public toImage(): Image {
        return null;
    }
}

/**
 * Represents a transformation matrix.
 * Transforms are used for transformations such as scaling and rotation when
 * rendering primitives, and can also be used as color matrices if that's
 * supported by the shader.
 */
export class Transform {

    constructor() {
    }

    /**
     * Multiplies another Transform into this one.
     *
     * The result of this function is to make a combined transformation.  For
     * example, composing a rotation with a translation will result in a
     * matrix which rotates and then translates in one step.
     *
     * @param {Transform} other - The Transform to multiply this one with.
     */
    public compose(other: Transform): void {
    }

    /**
     * Sets this Transform to identity (no transformation).
     */
    public identity(): void {
    }

    /**
     * Applies a rotation to the transformation matrix.
     *
     * @param {number} theta - The rotation angle, in radians.
     * @param {number} vx - X component of the axis to rotate around.
     * @param {number} vy - Y component of the axis to rotate around.
     * @param {number} vz - Z component of the axis to rotate around.
     */
    public rotate(theta: number, vx: number, vy: number, vz: number): void {
    }

    /**
     * Applies a scaling transform to the transformation matrix.
     *
     * @param {number} sx - X axis scaling factor.
     * @param {number} sy - Y axis scaling factor.
     * @param {number} sz - Z axis scaling factor.
     */
    public scale(sx: number, sy: number, sz: number): void {
    }

    /**
     * Applies a translation to the transformation matrix.
     *
     * @param {number} dx - Amount to translate along the X axis.
     * @param {number} dy - Amount to translate along the Y axis.
     * @param {number} dz - Amount to translate along the Z axis.
     */
    public translate(tx: number, ty: number, tz: number) {
    }

    /**
     * Get an independent copy of this Transform.
     *
     * @return {Transform} - The cloned Transform object.
     */
    public clone(): Transform {
        return this;
    }
}
