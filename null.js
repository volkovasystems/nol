"use strict";

/*;
              	@submodule-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-submodule-license
              
              	@submodule-configuration:
              		{
              			"package": "nol",
              			"path": "nol/null.js",
              			"file": "null.js",
              			"module": "nol",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/nol.git",
              			"test": "nol-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Null class wrapper.
              	@end-submodule-documentation
              */var _toStringTag = require("babel-runtime/core-js/symbol/to-string-tag");var _toStringTag2 = _interopRequireDefault(_toStringTag);var _toPrimitive = require("babel-runtime/core-js/symbol/to-primitive");var _toPrimitive2 = _interopRequireDefault(_toPrimitive);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var NULL = null;
var NULL_TAG = Object.prototype.toString.call(NULL);

var NAME = (0, _for2.default)("name");
var VALUE = (0, _for2.default)("value");
var TYPE = (0, _for2.default)("type");var

Null = function () {(0, _createClass3.default)(Null, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return instance === NULL || (instance || {}).constructor === Null;
		} }]);

	function Null(entity) {(0, _classCallCheck3.default)(this, Null);
		if (typeof entity == "string" && entity === NULL_TAG ||
		entity === NULL || !arguments.length)
		{
			this[NAME] = "null";
			this[VALUE] = entity || NULL;
			this[TYPE] = (0, _typeof3.default)(this.value);

		} else if (arguments.length) {
			throw new Error("invalid null value, " + entity);
		}
	}(0, _createClass3.default)(Null, [{ key: "toString", value: function toString()

		{
			return NULL_TAG;
		} }, { key: "valueOf", value: function valueOf()





		{
			return NULL;
		} }, { key: _toPrimitive2.default, value: function value(

		hint) {
			switch (hint) {
				case "string":
					return "";

				case "number":
					return 0;

				default:
					return false;}

		} }, { key: "toJSON", value: function toJSON()

		{
			return this.toString();
		} }, { key: _toStringTag2.default, get: function get() {return "Null";} }]);return Null;}();


module.exports = Null;

//# sourceMappingURL=null.js.map