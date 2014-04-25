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
 * @module sqlite
 * @author Jos Kuijpers (Rahkiin)
 */

/**
 * An SQLite database.
 *
 * @constructor
 * @param {String} path - Path of the SQLite database.
 */
function Database(path) {

	/**
	 * An object containing the tables.
	 * Key is a string with the tablename.
	 * The value is an instance of Table.
	 *
	 * @readonly
	 * @type {Object}
	 */
	this.tables = {};

	/**
	 * Perform an SQL query string, or start building a query.
	 *
	 * If 'sql' is unspecified, a Query object is returned.
	 *
	 * @param {String} [sql] - The SQL query to run.
	 * @return A Query instance.
	 */
	this.query = function(sql) {
	};

	/**
	 * Create a new table with specified name and layout.
	 *
	 * @param {String} name - Name of the new table.
	 * @param {Object} fieldsObject - An object specifying the layout
	 * of the table.
	 * @return An instance of Table on success, or null on failure.
	 */
	this.createTable = function(name,fieldsObject) {
	};

	/**
	 * Perform a query.
	 *
	 * @param {String} query - An SQL query with possible '?' paramaters.
	 * @param {Array} arguments - Arguments to fill in the parameters.
	 * @return {Array<Object>}
	 */
	this._performQuery = function(query,arguments) {
	};

	/**
	 * Get the insertion ID for the last INSERT query.
	 *
	 * @return {Number} The insertion ID, or -1 if no such id.
	 */
	this._insertId = function() {
	};

	/**
	 * Get the number of affected rows in the last UPDATE or DELETE query.
	 *
	 * @return {Number} Number of affected rows or -1 if no UPDATE
	 * or DELETE query has been performed.
	 */
	this._affectedRows = function() {
	};

	/**
	 * Get the error message for the last query.
	 *
	 * @return {String}
	 */
	this._getLastError = function() {
	};
}
exports = Database;

/**
 * A database table.
 *
 * @constructor
 */
function Table() {
	/**
	 * Name of the table.
	 *
	 * @readonly
	 * @type {String}
	 */
	this.name = "";

	/**
	 * Get the number of rows in the table.
	 *
	 * @return {Number} Number of rows in the table.
	 */
	this.countAll = function() {
	};

	/**
	 * Truncate the table.
	 *
	 * @return {Boolean} true on success, false otherwise.
	 */
	this.truncate = function() {
	};

	/**
	 * Drop the table.
	 *
	 * After a successfull call, this table object is invalid.
	 *
	 * @return {Boolean} true on success, false otherwise.
	 */
	this.drop = function() {
	};
}
exports.Table = Table;

/**
 * A database query.
 *
 * This class must build a query.
 *
 * @constructor
 */
function Query() {
/*
    .select(column/columns) // string/array
    .selectSum(column)
    .selectAvg(column)
    .selectMin(column)
    .selectMax(column)

    .orderBy(column[,order])
    .limit(n)
    .offset(n)
    .distinct()
    .having(object)
    .orHaving(object)
    .groupBy(column/columns)
    .like(object[,wildcard])
    .orLike(…)
    .notlike(…)
    .orNotLike(…)

    .where(object/string)
    .whereIn(object) // object = {column: value} or {columns: [ value, value] }
    .whereNotIn…
    .orWhere…
    .orWhereIn…
    .orWhereNotIn…

    .join(table[, condition[, type]])
*/
	/**
	 * Set values.
	 *
	 * Key is column name, value is value.
	 * Corresponds to the 'SET key = value' query part.
	 *
	 * @param {Object} object - Key-value object.
	 */
    this.set = function(object) {
    };

    /**
     * Execute an insertion query.
     *
     * When using the rowObject parameter, all other query settings
     * are dismissed.
     *
     * @param {String} table - Name of the table.
     * @param {Object} [rowObject] - Object representing a whole row to be inserted.
     * @return {Number} The inserted row id, 0 if no id available, and
     * -1 on failure.
     */
    this.insert = function(table, rowObject) {
    };

    /**
     * Execute an update query.
     *
     * @param {String} table - Name of the table.
     * @return {Number} Number of affected rows, or -1 on failure.
     */
    this.update = function(table) {
    };

    /**
     * Execute a delete query.
     *
     * @return {Number} Number of affected rows, or -1 on failure.
     */
    this.delete = function(table) {
    };

    /**
     * Execute a selection query.
     *
     * @return {Array<Object>} The query result.
     */
    this.get = function(table)  {
    };
}
exports.Query = Query;
