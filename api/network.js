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
 * @namespace Network
 * @author Jos Kuijpers (Rahkiin)
 */

/**
 * The network address of the local computer.
 * @static
 */
Network.localAddress = "127.0.0.1";

/**
 * The network name of the local computer.
 * @static
 */
Network.localName = "localhost";

/**
 * Listen on given port.
 *
 * @function listenOnPort
 * @memberof Network
 * @param {Number} port - The port to listen on.
 * @param {listenCallback} callback - Callback called when connections are accepted.
 */
Network.listenOnPort = function(port,callback) {
}

/**
 * Create a new Bonjour service.
 *
 * @constructor
 * @param {String} [type=_game._tcp] - Type of the service.
 * @param {String} [domain=local] - Domain to make the service available to.
 * @returns {boolean} true on success, false on failure.
 */
Network.Bonjour = function(type, domain) {
	/** @member {String} */
	this.type = type || "_game._tcp";
	/** @member {String} */
 	this.domain = domain || "";
}

/**
 * Publish a new service.
 *
 * @param {Number} port - Port the service is available on.
 * @param {String} name - Name to publish the service on. Pass an empty String
 * to use the local computer name.
 * @param {publishCallback} [callback] - Callback to retrieve status.
 */
Network.Bonjour.prototype.publish = function(port, name, callback) {
}

/**
 * Discover published peers in the domain.
 *
 * @param {discoverCallback} callback - Callback called when a peer is found.
 */
Network.Bonjour.prototype.discover = function(callback) {
}

/**
 * Resolve a name to a hostname and port.
 *
 * You should not store the hostname and port in a persistent storage,
 * as it might change over time. Store the name instead and call
 * Bonjour.resolve().
 *
 * @param {String} name - Name of the peer service.
 * @param {resolveCallback} callback - Callback called when a hostname+port
 * combination is found.
 */
Network.Bonjour.prototype.resolve = function(name, callback) {
}

/**
 * Stop publishing, discovering or resolving.
 *
 * Call this when you found your peers and want to play the game.
 * After this call, you can still call resolve() again to re-resolve
 * a peer.
 */
Network.Bonjour.prototype.stop = function() {
}

/**
 * @class Bonjour.Peer
 * @memberof Network
 * @property {string} name
 */

/**
 * Find a hostname+port combination for this peer.
 *
 * You should not store the hostname and port in a persistent storage,
 * as it might change over time. Store the name instead and call
 * Bonjour.resolve().
 *
 * @param {resolveCallback} callback - Callback called when a hostname+port
 * combination is found.
 */
Network.Bonjour.Peer.prototype.resolve = function(callback) {
}

/**
 * Get a socket for to the peer.
 *
 * @returns {Socket} A new socket. Call connect() to connect it to the peer.
 */
Network.Bonjour.Peer.prototype.getSocket = function() {
}

/**
 * Callback used when publishing is complete or it failed.
 *
 * @callback publishCallback
 * @memberof Network.Bonjour
 * @param {String} status - Result-status of publishing.
 */

/**
 * Callback used when a peer is discovered.
 *
 * @callback discoverCallback
 * @memberof Network.Bonjour
 * @param {String} error - Error message or null.
 * @param {Network.Bonjour.Peer} peer - The new peer or null.
 */

/**
 * Callback used when a host+port combination is resolved.
 *
 * @callback resolveCallback
 * @memberof Network.Bonjour
 * @param {String} error - Error message or null.
 * @param {String} host - Hostname of the peer.
 * @param {Number} port - Port of the peer.
 */
 
 /**
 * Callback used when clients are connecting to an open port.
 *
 * @callback listenCallback
 * @memberof Network
 * @param {String} error - Error message, or null if no error.
 * @param {Socket} peer - The socket to the peer. It is already open.
 */
 