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
 * @module input
 * @author Jos Kuijpers (Rahkiin)
 */

/**
 * An array of gamepads. Each element is an Input.Gamepad.
 * @type {Array.<Input.Gamepad>}
 */
exports.gamepads = [];

/*
 * Gamepad
 */

/**
 * Create a new gamepad.
 *
 * This constructor should not be used: instead, get a gamepad
 * from the Input.gamepads array.
 * 
 * @constructor
 */
function Gamepad() {
	/**
	 * The number of buttons.
	 *
	 * @readonly
	 */
	this.numberOfButtons = 0;
	
	/**
	 * The number of axis.
	 *
	 * @readonly
	 */
	this.numberOfAxis = 0;
	
	/**
	 * The button to activate talk.
	 */
	this.talkActivationButton = 0;

	/**
	 * Get the value of the specified axis.
	 *
	 * @param {Input.Gamepad.Axis} axis - The axis: one of the Gamepad.Axis enum.
	 * @return {Number} Value of the axis.
	 */
	this.getAxis = function(axis) {	
	};

	/**
	 * Get the whether specified button is pressed.
	 *
	 * @param {Input.Gamepad.Button} button - The button: one of the Gamepad.Button enum.
	 * @return {Boolean} true when the button is pressed, false otherwise.
	 */
	this.isButtonPressed = function(button) {
	};
}
exports.Gamepad = Gamepad;

/**
 * Enum for gamepad axes
 *
 * The value of these constants can be any number.
 *
 * @readonly
 * @enum {Number}
 */
Gamepad.Axis = {
	/** No selection */
	NONE: 0,
	/** The X axis */
	X: 1,
	/** The Y axis */
	Y: 2	
};

/**
 * Enum for gamepad buttons.
 *
 * The value of these constants can be any number.
 *
 * @readonly
 * @enum {Number}
 */
Gamepad.Button = {
	/** No button: for queue. */
	NONE: 0,
	/** The A button. */
	A: 1,
	/** The B button. */
	B: 2,
	/** The X button. */
	X: 3,
	/** The Y button. */
	Y: 4
};

/**
 * Keyboard interface.
 *
 * @constructor
 */
function Keyboard() {
}
exports.Keyboard = Keyboard;

/**
 * A not-key.
 *
 * @readonly
 * @enum {Number}
 */
Keyboard.Keys = {
	/** No button: for queue. */
	NONE: 0
};

/**
 * Mouse  interface.
 *
 * @constructor
 */
function Mouse() {
}
exports.Mouse = Mouse;

/**
 * Horizontal position of the mouse, in points, within the window.
 */
Mouse.x = 0;

/**
 * Vertical position of the mouse, in points, within the window.
 */
Mouse.y = 0;

/**
 * Number of buttons available in the mouse.
 */
Mouse.numberOfButtons = 0;

/**
 * Set position of the mouse cursor.
 *
 * @param {Number} x - Horizontal position.
 * @param {Number} y - Vertical position.
 */
Mouse.setPosition = function(x,y) {
};

/**
 * Get whether a button is pressed.
 *
 * @param {Mouse.Button} button - Button.
 * @return {Boolean} true when pressed, false otherwise.
 */
Mouse.isButtonpressed = function(button) {
};

/**
 * Mouse buttons.
 *
 * The value of these constants can be any number.
 *
 * @readonly
 * @enum {Number}
 */
Mouse.Button = {
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
	EXTRA2: 5,
	/** The primary mouse button. */
	PRIMARY: LEFT,
	/** The secondary mouse button. */
	SECONDARY: RIGHT
};

/**
 * @constructor
 */
Mouse.Wheel = function() {
};


/**
 * Get an event from the eventqueue.
 *
 * @return {Mouse.Wheel.Event} Event, or Event.NONE when queue is empty.
 */
Mouse.Wheel.getEvent = function() {
};

/**
 * Clear the wheel event queue.
 */
Mouse.Wheel.clearQueue = function() {
};

/**
 * Mouse wheel events.
 *
 * The value of these constants can be any number.
 *
 * @readonly
 * @enum {Number}
 */
Mouse.Wheel.Event = {
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

/*
 * TODO
 * Mouse events: 'buttondown','buttonup','click'
 * Mouse Wheel events: 'scroll'
 * Keyboard events: 'keydown','keyup'
 * Gamepad events: 'buttondown', 'buttonup'
 */
