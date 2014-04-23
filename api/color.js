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

/**
 * Create a new color.
 *
 * @constructor
 * @param {Number} r - Red value, ranging 0 to 255.
 * @param {Number} g - Green value, ranging 0 to 255.
 * @param {Number} b - Blue value, ranging 0 to 255.
 * @param {Number} [a=1.0] - Alpha value, ranging 0.0 to 1.0.
 */
function Color(r,g,b,a) {
	/** Red value. */
	this.red = r;
	
	/** Green value. */
	this.green = g;
	
	/** Blue value. */
	this.blue = b;
	
	/** Alpha value. */
	this.alpha = a || 1.0;
}
exports = Color;

/**
 * Blend the color evenly with specified color.
 *
 * @param {Color} color - The color to blend with.
 * @return {Color} The new color.
 */
Color.prototype.blend = function(color) {
}

/**
 * Blend the color weighted with specified color.
 *
 * @param {Color} color - The color to blend with.
 * @param {Number} weight1 - The weight for the 'this' color, ranging 0.0 to 1.0.
 * @param {Number} weight2 - The weight for the specified color, ranging 0.0 to 1.0.
 * @return {Color} The new color.
 */
Color.prototype.blendWeighted = function(color,weight1,weight2) {
}

/**
 * Red color: (255, 0, 0)
 *
 * @const
 */
exports.RED = new Color(255,0);

/**
 * Green color: (0, 255, 0)
 *
 * @const
 */
exports.GREEN = new Color(0,255);

/**
 * Blue color: (0, 0, 255)
 *
 * @const
 */
exports.BLUE = new Color(0,255);

/**
 * Black color: (0, 0, 0)
 *
 * @const
 */
exports.BLACK = new Color(0,0);

/**
 * Gray color: (127, 127, 127)
 *
 * @const
 */
exports.GRAY = new Color(127,127,127);

/**
 * Dark gray color: (85, 85, 85)
 *
 * @const
 */
exports.DARKGRAY = new Color(85,85,85);

/**
 * Light gray color: (170, 170, 170)
 *
 * @const
 */
exports.LIGHTGRAY = new Color(170,170,170);

/**
 * Black color: (0, 0, 0)
 *
 * @const
 */
exports.BLACK = new Color(0,0);


/**
 * White color: (255, 255, 255)
 *
 * @const
 */
exports.WHITE = new Color(255,255,255);

/**
 * Yellow color: (255, 255, 0)
 *
 * @const
 */
exports.YELLOW = new Color(255,255);

/**
 * Purple color: (255, 0, 255)
 *
 * @const
 */
exports.PURPLE = new Color(255,255);

/**
 * Cyan color: (0, 255, 255)
 *
 * @const
 */
exports.CYAN = new Color(0,255,255);
