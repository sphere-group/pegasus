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
 * @class Mouse
 * @author Jos Kuijpers (Rahkiin)
 * @memberof Input
 */

/**
 * Horizontal position of the mouse, in points, within the window.
 */
Input.Mouse.x = 0;

/**
 * Vertical position of the mouse, in points, within the window.
 */
Input.Mouse.y = 0;

/**
 * Number of buttons available in the mouse.
 */
Input.Mouse.numberOfButtons = 0;

/**
 * Set position of the mouse cursor.
 *
 * @param {Number} x - Horizontal position.
 * @param {Number} y - Vertical position.
 */
Input.Mouse.setPosition = function(x,y) {
}

/**
 * Get whether a button is pressed.
 *
 * @param {Input.Mouse.Button} button - Button.
 * @return {Boolean} true when pressed, false otherwise.
 */
Input.Mouse.isButtonpressed = function(button) {
}

/**
 * Mouse buttons.
 *
 * @readonly
 * @enum {Number}
 */
Input.Mouse.Button = {
	/** No button. */
	NONE: 0,
	/** Left mouse button. */ 
	LEFT: 1,
	/** Right mouse button. */ 
	RIGHT: 2,
	/** Middle mouse button. */ 
	MIDDLE: 3,
	/** First extra mouse button. */ 
	EXTRA1: 4,
	/** Second extra mouse button. */ 
	EXTRA2: 5
};

/**
 * @class Mouse.Wheel
 * @author Jos Kuijpers (Rahkiin)
 * @memberof Input
 */

/**
 * Get an event from the eventqueue.
 *
 * @return {Input.Mouse.Wheel.Event} Event, or Event.NONE when queue is empty.
 */
Input.Mouse.Wheel.getEvent = function() {
}

/**
 * Clear the wheel event queue.
 */
Input.Mouse.Wheel.clearQueue = function() {
}

/**
 * Mouse wheel events.
 *
 * @readonly
 * @enum {Number}
 */
Input.Mouse.Wheel.Event = {
	/** No scroll event. */
	NONE: 0,
	/** Scroll up event. */
	UP: 1,
	/** Scroll down event. */
	DOWN: 2,
	/** Scroll left event. */
	LEFT: 3,
	/** Scroll right event. */
	RIGHT: 4
};
