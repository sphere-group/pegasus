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
 * @author Jos Kuijpers (Rahkiin)
 */

/**
 * Create a new color.
 *
 * @constructor
 * @param {Number} r - Red value, ranging 0.0 to 1.0.
 * @param {Number} g - Green value, ranging 0.0 to 1.0.
 * @param {Number} b - Blue value, ranging 0.0 to 1.0.
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
	this.alpha = a;
}

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
 * Red color: (1.0, 0.0, 0.0)
 *
 * @const
 */
Color.RED = new Color(1.0,0,0);

/**
 * Green color: (0.0, 1.0, 0.0)
 *
 * @const
 */
Color.GREEN = new Color(0,1.0,0);

/**
 * Blue color: (0.0, 0.0, 1.0)
 *
 * @const
 */
Color.BLUE = new Color(0,0,1.0);

/**
 * Black color: (0.0, 0.0, 0.0)
 *
 * @const
 */
Color.BLACK = new Color(0,0,0);

/**
 * Gray color: (0.5, 0.5, 0.5)
 *
 * @const
 */
Color.GRAY = new Color(0.5,0.5,0.5);

/**
 * Dark gray color: (0.333, 0.333, 0.333)
 *
 * @const
 */
Color.DARKGRAY = new Color(0.333,0.333,0.333);

/**
 * Light gray color: (0.667, 0.667, 0.667)
 *
 * @const
 */
Color.LIGHTGRAY = new Color(0.667,0.667,0.667);

/**
 * Black color: (0.0, 0.0, 0.0)
 *
 * @const
 */
Color.BLACK = new Color(0,0,0);


/**
 * White color: (1.0, 1.0, 1.0)
 *
 * @const
 */
Color.WHITE = new Color(1.0,1.0,1.0);

/**
 * Yellow color: (1.0, 1.0, 0.0)
 *
 * @const
 */
Color.YELLOW = new Color(1.0,1.0,0);

/**
 * Purple color: (1.0, 0.0, 1.0)
 *
 * @const
 */
Color.PURPLE = new Color(1.0,0,1.0);

/**
 * Cyan color: (0.0, 1.0, 1.0)
 *
 * @const
 */
Color.CYAN = new Color(0,1.0,1.0);
