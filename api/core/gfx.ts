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
 * Graphics module
 * @module gfx
 * @author Bruce Pascoe (Fat Cerberus) and Jos Kuijpers (Rahkiin)
 */

export default class Gfx {

    public static frameRate: number;

    get screen: Surface

    public static flip(): void {

    }

    public static setResolution(): void {

    }
}

export class Color {
    clone
    blend
    transform

    constructor() {

    }
}

export class ColorMatrix {

}

export class Group {
    getset shader
    getset transform

    constructor() {

    }

    draw() {

    }
}

export class Image {
    get height
    get width

    constructor() {

    }
}

export class Shape {
    getset texture

    constructor() {

    }
}

export class Surface {
    get height
    get width

    constructor() {

    }

    toImage() {

    }
}

export class Transform {

    constructor() {

    }

    compose() {

    }

    identity() {

    }

    rotate() {

    }

    scale() {

    }

    translate() {

    }
}
