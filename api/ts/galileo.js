/*
* Copyright (c) 2014 The Sphere Team. All rights reserved.
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
 * @author Martin McDonough - FlyingJester
 */

/**
 * The basic unit of Galileo primitives.
 * All drawing requires any form to be constructed of vertices.
 * @constructor
 * @param {Number} x - The X coordinate of the vertex.
 * @param {Number} y - The Y coordinate of the vertex.
 * @param {Color} color - The color mask of the vertex. The texture
 * source color will be multiply-masked with this.
 */

function Vertex(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
}

/**
 * The superclass of all primitives. It consists of a series of
 * Vertices, a texture represented as an Image, and a series of
 * transformations.
 * @constructor
 * @param {Array} vertices - Vertices to become part of the Shape. Each
 * Vertex must be unique to this particular Shape. This restriction may
 * be relaxed in future revisions.
 * @param {Image} texture - Texture to be used to texture the Shape.
 */

function Shape(vertices, texture){

    /**
     * A list of vertices in the Shape.
     * @memberof Shape
     * @type {Array}
     */
    this.vertices = vertices;

    /**
     * The texture to use when drawing the shape.
     * @memberof Shape
     * @type {Image}
     */

    this.texture = texture;

    /**
     * The rotation angle of the Shape.
     * @memberof Shape
     * @type {Number}
     */

    this.angle = 0.0;

    /**
     * The offset from the origin to draw the shape. It is added to the
     * coordinates of each Vertex when the shape is draw.
     * @memberof Shape
     * @type {Object}
     */

    this.offset = {
        "x":0,
        "y":0,
    };

    /**
     * The offset to rotate the Shape on.
     * @memberof Shape
     * @type {Object}
     */

    this.rotationOffset = {
        "x":0,
        "y":0,
    };

    /**
     * The group that owns the Shape.
     * If this is null, the Shape is owned by the global group.
     * @type {Object}
     * @readonly
     */

    this.group = null;

    /**
     * Draws the Shape. This should only ever be used if the Shape
     * belongs to the global Group. Otherwise, behaviour is undefined.
     * @function
     * @memberof Shape
     */

    this.draw = function(){
    };

}

/** 
 * Groups Shapes together into a single drawing operation.
 * They also allow single transformation operations to be applied to all
 * every Shape in the group.
 * @constructor
 * @param {Array} shapes - An array of Shapes to assign to the group.
 */
function Group(shapes){
    /**
     * Holds an array of all the Shapes the Group holds.
     * @memberof Group
     * @type {Array}
     */
    this.shapes = shapes;

    /**
     * Specifies the offset from the origin to draw the group by.
     * @memberof Group
     * @type {Object}
     */

    this.offset = {
        "x":0,
        "y":0,
    };

    /**
     * Specifies the angle of rotation to apply when drawing the Group.
     * @memberof Group
     * @type {Number}
     */

    this.angle = 0.0;

    /**
     * Specifies the offset to rotate the Group by.
     * @memberof Group
     * @type {Object}
     */

    this.rotationOffset = {
        "x":0,
        "y":0,
    };

    /**
     * Draws all the Shapes in the Groups.
     * @function
     * @memberof {Group}
     */

    this.draw = function(){
    };

}
