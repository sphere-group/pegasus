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
 * @module keyboard
 * @author Bruce Pascoe (Fat Cerberus)
 */

export default class KeyboardModule
{
	/**
	 *  Keyboard key constants.
	 */
	public enum Key
	{
		None,
		Escape,
		F1,
		F2,
		F3,
		F4,
		F5,
		F6,
		F7,
		F8,
		F9,
		F10,
		F11,
		F12,
		Tilde,
		Key0,
		Key1,
		Key2,
		Key3,
		Key4,
		Key5,
		Key6,
		Key7,
		Key8,
		Key9,
		Minus,
		Equals,
		Backspace,
		Tab,
		A,
		B,
		C,
		D,
		E,
		F,
		G,
		H,
		I,
		J,
		K,
		L,
		M,
		N,
		O,
		P,
		Q,
		R,
		S,
		T,
		U,
		V,
		W,
		X,
		Y,
		Z,
		LShift,
		RShift,
		CapsLock,
		NumLock,
		ScrollLock,
		LCtrl,
		RCtrl,
		Alt,
		AltGr,
		Space,
		OpenBrace,
		CloseBrace,
		Semicolon,
		Apostrophe,
		Comma,
		FullStop,
		Slash,
		Backslash,
		Enter,
		Insert,
		Delete,
		Home,
		End,
		PageUp,
		PageDown,
		Up,
		Right,
		Down,
		Left,
		NumPad0,
		NumPad1,
		NumPad2,
		NumPad3,
		NumPad4,
		NumPad5,
		NumPad6,
		NumPad7,
		NumPad8,
		NumPad9
	}

	/**
	 *  Clear the keyboard key queue.
	 *
	 *  @static
	 */
	public static clearQueue(): void
	{
	}

	/**
	 *  Find whether a keyboard key is currently pressed.
	 *
	 *  @static
	 *  @param {Key} key - The keyboard key to check.
	 *  @return {boolean} - Whether the key is pressed.
	 */
	public static isPressed(key: Key): boolean
	{
	}
	
	/**
	 *  Get the Unicode character associated with a keyboard key.
	 *  For example, keyToChar(Key.A) is "A".
	 *
	 *  Non-character keys such as PageUp or Shift will give an empty string.
	 *
	 *  @param {Key} key- A keyboard key.
	 */
	public static keyToChar(key: Key): string
	{
	}

	/**
	 *  Read the next key from the key queue.
	 *
	 *  @static
	 */
	public static readKey(): Key
	{
	}
}
