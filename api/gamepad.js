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
 * Create a new gamepad.
 *
 * This constructor should not be used: instead, get a gamepad
 * from the Input.gamepads array.
 * 
 * @constructor
 * @memberof Input 
 */
Input.Gamepad = function() {
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
}

/**
 * Get the value of the specified axis.
 *
 * @param {Input.Gamepad.Axis} axis - The axis: one of the Gamepad.Axis enum.
 * @return {Number} Value of the axis.
 */
Input.Gamepad.prototype.getAxis = function(axis) {
	
}


/**
 * Get the whether specified button is pressed.
 *
 * @param {Input.Gamepad.Button} button - The button: one of the Gamepad.Button enum.
 * @return {Boolean} true when the button is pressed, false otherwise.
 */
Input.Gamepad.prototype.isButtonPressed = function(button) {
	
}

/**
 * Enum for gamepad axes
 *
 * @readonly
 * @enum {Number}
 */
Input.Gamepad.Axis = {
	NONE: 0,
	X: 1,
	Y: 2	
};

/**
 * Enum for gamepad buttons.
 *
 * @readonly
 * @enum {Number}
 */
Input.Gamepad.Button = {
	NONE: 0,
	A: 1
};

