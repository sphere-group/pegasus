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
 * @author Bruce Pascoe (Fat Cerberus), Jos Kuijpers (Rahkiin)
 */

export default class GraphicsModule
{
    /**
     * Get the default render target (the backbuffer).
     *
     * @readonly
     * @type {Surface}
     */
    public static screen: IScreen;
}

export interface IScreen extends Surface
{
    /**
     * Frame rate used for throttling flip(), 0 to run at full speed.
     * When flip() is called continuously in a loop, the engine will provide
     * automatic rate-limiting based on the framerate.
     *
     * @type {number}
     */
    public frameRate: number;
    
    /**
     * The height of the screen resolution, in pixels.
     *
     * @type {number}
     */
    public height: number;

    /**
     * The width of the screen resolution, in pixels.
     *
     * @type {number}
     */
    public width: number;
    
	/**
	 * Flip the backbuffer to the screen.
	 */
	public flip(): void
	{
	}
}

/**
 * A color abstraction with utility functions.
 */
export class Color
{
    /**
     * Calculates a weighted average of two colors.  The optional weights
     * specify the ratio of one color to another in the final mix.  If weights
     * are not provided, the result is a 50/50 mix.
     *
     * @return {Color} The new, mixed color.
     * @param {Color} color1 The first color in the mix.
     * @param {Color} color2 The second color in the mix.
     * @param {number} w1 The relative weight of the first color.
     * @param {number} w2 The relative weight of the second color.
     */
    public static mix(color1: Color, color2: Color, w1?: number, w2?: number): Color
    {
    }

    /**
     * Constructs a new Color.
     *
     * @constructor
     * @param {Number} r Red value, ranging 0.0 to 1.0.
     * @param {Number} g Green value, ranging 0.0 to 1.0.
     * @param {Number} b Blue value, ranging 0.0 to 1.0.
     * @param {Number} [a=1.0] Alpha value, ranging 0.0 to 1.0.
     */
    constructor(r: number, g: number, b: number, a?: number)
    {
    }
    
    /**
     * The value of the R (red) color channel.
     *
     * @type {number}
     */
    public r: number;
    
    /**
     * The value of the G (green) color channel.
     *
     * @type {number}
     */
    public g: number;
    
    /**
     * The value of the B (blue) color channel.
     *
     * @type {number}
     */
    public b: number;

    /**
     * The value of the A (alpha) color channel.
     *
     * @type {number}
     */
    public a: number;

    /**
     * Clones this color to create a new copy.
     *
     * @return {Color} The cloned Color object.
     */
    public clone(): Color
    {
        return new Color(this.r, this.g, this.b, this.a);
    }
}

/**
 * A group of shapes.
 */
export class Group {
    /**
     * Constructs a Group from a list of Shapes.
     *
     * @constructor
     * @param {Shape[]} shapes The Shapes which make up the group.
     */
    constructor(shapes: Shape[])
    {
    }

    /**
     * A Shader to use when drawing the Group.
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

    /**
     * Draws the Group.
     *
     * @param {Surface} target The Surface to draw on.
     */
    public draw(target?: Surface)
    {
    }
}

export class Image {
    /**
     * Constructs a new Image from an image file.
     *
     * @constructor
     * @param {string} filename SphereFS filename of the image to load.
     */
    constructor(filename: string)
    {
    }

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

export class Shader
{

    /**
     * Create a new shader.
     *
     * @constructor
     * @param {IShaderOptions} options [description]
     */
    constructor(options: IShaderOptions)
    {
    }
}

/**
 * Describes the type of a Shape.
 * This affects how a Shape's vertices are interpreted by the GPU.
 */
export enum ShapeType
{
	Auto,
	Fan,
	Lines,
	LineLoop,
	LineStrip,
	Points,
	Triangles,
	TriangleStrip,
}

/**
 * Describes a Vertex of a Shape.
 */
export interface IVertex
{
	/**
	 * X coordinate of the vertex.
	 *
	 * @type {number}
	 */
	x: number;
	
	/**
	 * Y coordinate of the vertex.
	 *
	 * @type {number}
	 */
	y: number;
	
	/**
	 * Z coordinate of the vertex.
	 *
	 * @type {number}
	 */
	z?: number;
	
	/**
	 * "U" texture coordinate of the vertex.
	 * Texture coordinates determine which part of a texture should be applied
	 * at each vertex. U goes left-to-right from 0.0 - 1.0.
	 *
	 * @type {number}
	 */
	u: number;

	/**
	 * "V" texture coordinate of the vertex.
	 * Texture coordinates determine which part of a texture should be applied
	 * at each vertex. V goes bottom-to-top from 0.0 - 1.0.
	 *
	 * @type {number}
	 */
	v: number;
	
	/**
	 * The color of the vertex.
	 * Vertex colors are interpolated over the shape and multiplied with the
	 * texel colors to decide the final color of each fragment.
	 *
	 * @type {Color}
	 */
	color: Color;
}

export class Shape {
    /**
     * Constructs a new Shape.
     *
     * @param {IVertex[]} vlist Array of vertices describing the shape's mesh.
     * @param {Image} texture An Image to use to texture the shape. Can be null.
     * @param {ShapeType} type Which type of Shape to create.
     */
     */
    constructor(vlist: IVertex[], texture?: Image, type?: ShapeType)
    {
    }

    /**
     * An Image which will be used as a texture for this Shape.
     *
     * @type {Image}
     */
    public texture: Image

    /**
     * Draws the shape.
     *
     * @param {Surface} target The Surface to draw on.
     * @param {Transform} transform A Transformation matrix to apply.
     */
    public draw(target?: Surface, transform?: Transform): void
    {
    }
}

/**
 * Represents a drawable surface.
 * Surfaces can be used as render targets in place of the screen.
 */
export class Surface
{
    /**
     * Constructs a new Surface.
     *
     * @constructor
     * @param {number} width Width of the surface.
     * @param {number} height Height of the surface.
     */
    constructor(width: number, height: number)
    {
    }

    /**
     * Gets the width of the surface.
     *
     * @readonly
     * @type {number}
     */
    public width: number;

    /**
     * Gets the height of the surface.
     *
     * @readonly
     * @type {number}
     */
    public height: number;

    /**
     * Generates an Image from the surface contents.
     * Modifying the surface contents after this is called will not affect the
     * generated image.
     *
     * @return {Image} An Image created from the Surface.
     */
    public toImage(): Image
    {
    }
}

/**
 * Represents a transformation matrix.
 * Transforms are used for transformations such as scaling and rotation when
 * rendering Shapes, and can also be used as RGB color matrices if that's
 * supported by the shader.
 */
export class Transform
{
    /**
     * Constructs a new Transform.
     *
     * @constructor
     */
    constructor()
    {
    }

    /**
     * Get an independent copy of this Transform.
     *
     * @return {Transform} The cloned Transform object.
     */
    public clone(): Transform
    {
        return this;
    }

    /**
     * Multiplies another Transform into this one.
     * The result of this function is to make a combined transformation.  For
     * example, composing a rotation with a translation will result in a
     * matrix which rotates and then translates in one step.
     *
     * @param {Transform} other The Transform to multiply this one with.
     */
    public compose(other: Transform): void
    {
    }

    /**
     * Sets this Transform to identity (no transformation).
     */
    public identity(): void
    {
    }

    /**
     * Applies a rotation to the transformation matrix.
     *
     * @param {number} theta The rotation angle, in radians.
     * @param {number} [vx=0.0] X component of the vector to rotate around.
     * @param {number} [vy=0.0] Y component of the vector to rotate around.
     * @param {number} [vz=1.0] Z component of the vector to rotate around.
     */
    public rotate(theta: number, vx?: number, vy?: number, vz?: number): void
    {
    }

    /**
     * Applies a scaling transform to the transformation matrix.
     *
     * @param {number} sx X axis scaling factor.
     * @param {number} sy Y axis scaling factor.
     * @param {number} [sz=1.0] Z axis scaling factor.
     */
    public scale(sx: number, sy: number, sz?: number): void
    {
    }

    /**
     * Applies a translation to the transformation matrix.
     *
     * @param {number} dx Amount to translate along the X axis.
     * @param {number} dy Amount to translate along the Y axis.
     * @param {number} [dz=0.0] Amount to translate along the Z axis.
     */
    public translate(dx: number, dy: number, dz?: number): void
    {
    }
}
