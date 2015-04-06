/*
* Copyright (c) 2015 The Sphere Team. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions
* are met:
* 1. Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright
* notice, this list of conditions and the following disclaimer in the
* documentation and/or other materials provided with the distribution.
*
* 3. The origin of this software must not be misrepresented; you must 
* not claim that you wrote the original software. If you use this
* software in a product, an acknowledgement in the product documentation
* would be appreciated, but is not required.
* 4. Altered source versions must be plainly marked as such, and must 
* not be misrepresented as being the original software.
*
* DISCLAIMER:
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* ``AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
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
 * @module galileo
 * @author Martin McDonough (FlyingJester)
 */

/**
 * The basic unit of Galileo primitives.
 * All drawing requires any form to be constructed of vertices.
 *
 * @constructor
 * @param {Number} x - The X coordinate of the vertex.
 * @param {Number} y - The Y coordinate of the vertex.
 * @param {Color} color - Optional color mask of the vertex. If not 
 * supplied, it will default to red 255, green 255, blue 255, alpha 255.
 * a Shape's Texture source color will be multiply-masked with this.
 * @param {Number} u - Optional U coordinate for texture mapping
 * @param {Number} v - Optional V coordinate for texture mapping
 */

function Vertex(x, y, color, u, v){
    this.x = x;
    this.y = y;
    this.u = u;
    this.v = v;
    this.color = color;
}

/**
 * The superclass of all primitives. It consists of a series of
 * Vertices and a texture represented as an Image.
 *
 * @constructor
 * @param {Array} vertices - Vertices to become part of the Shape. Each
 * Vertex must be unique to this particular Shape. This restriction may
 * be relaxed in future revisions.
 * @param {Image} texture - Texture to be used to texture the Shape.
 */

function Shape(vertices, texture){

    /**
     * A list of vertices in the Shape.
     *
     * @type {Array}
     */
    this.vertices = vertices;

    /**
     * The texture to use when drawing the shape.
     *
     * @type {Image}
     */

    this.image = image;

}

/** 
 * Groups Shapes together into a single drawing operation.
 * They also allow single transformation operations to be applied to all
 * every Shape in the group.
 *
 * @constructor
 * @param {Array} shapes - An array of Shapes to assign to the group.
 * @param {Object} shader - The ShaderProgram to use to draw this group using.
 */
function Group(shapes, shader){
    /**
     * Holds an array of all the Shapes the Group holds.
     *
     * @type {Array}
     */
    this.shapes = shapes;

    /**
     * Specifies the X offset from the origin to draw the group by.
     *
     * @type {Number}
     */
    
    this.x = 0;

    /**
     * Specifies the Y offset from the origin to draw the group by.
     *
     * @type {Number}
     */
    
    this.y = 0;

    /**
     * Specifies the angle of rotation to apply when drawing the Group.
     *
     * @type {Number}
     */

    this.angle = 0.0;

    /**
     * Specifies the X offset from the origin to rotate the Group around.
     *
     * @type {Number}
     */

    this.rotX = 0;

    /**
     * Specifies the Y offset from the origin to rotate the Group around.
     *
     * @type {Number}
     */

    this.rotY = 0;

    /**
     * Draws all the Shapes in the Groups.
     *
     * @function
     */

    this.draw = function(){
    };

    /**
     * Specifies the ShaderProgram to draw this group with.
     *
     * @type {Object}
     */

    this.shader = {};

}

/** 
 * Creates a ShaderProgram that allows the use of raster coordinates, with
 * the origin at the upper left corner of the screen.
 * Implementations may provide other methods of creating custom a ShaderProgram.
 */
function GetDefaultShaderProgram(){
}
