Pegasus
=======

The protoype API for Sphere 2.0, codenamed Pegasus.

## Generating documentation ##
The API is written using empty function and class statements with
documentation using JSDoc. To create a browseable documentation,
run JSDoc on this repository.

* Install node.js
* Install JSDoc: `npm install jsdoc`
* [Optional] Install templates used by the Sphere Team: `npm install ink-docstrap`
* Run JSDoc: `jsdoc -c jsdoc.json` (you will have to configure the template yourself
  if you installed both packages globally, you need to use `-t ../ink-docstrap/template`).

## Issues and Pullrequests ##
If you have ideas, comments, troubles: make an issue. If you
created some part of the API in a fork, make a pull request.

## License ##
Pegasus is released under the 2-clause BSD license, as seen below.

```
Copyright (c) 2014 The Sphere Team. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:
1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE 
USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```
