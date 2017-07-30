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
              			"path": "nol/null.module.js",
              			"file": "null.module.js",
              			"module": "nol",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              
              	@include:
              		{
              			"ehm": "ehm"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var EMPTY_STRING = "";
var NULL = null;
var SERIALIZE_NULL_TAG = "[object Null:null]";
var META_SERIALIZE_NULL_TAG = Meta.create(NULL).serialize();var

Null = function (_Meta) {(0, _inherits3.default)(Null, _Meta);(0, _createClass3.default)(Null, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				instance === NULL ||
				Meta.instanceOf(instance, this));

		} }, { key: "deserialize", value: function deserialize(

		data, parser, blueprint) {
			/*;
                            	@meta-configuration:
                            		{
                            			"data": "*",
                            			"parser": "function",
                            			"blueprint": "function"
                            		}
                            	@end-meta-configuration
                            */

			return Meta.create(this, NULL);
		} }, { key: "isCompatible", value: function isCompatible(

		tag) {
			return (
				tag === SERIALIZE_NULL_TAG ||
				tag === META_SERIALIZE_NULL_TAG);

		} }]);

	function Null() {(0, _classCallCheck3.default)(this, Null);return (0, _possibleConstructorReturn3.default)(this, (Null.__proto__ || (0, _getPrototypeOf2.default)(Null)).call(this,
		NULL, "Null"));
	}(0, _createClass3.default)(Null, [{ key: "serialize", value: function serialize(













		parser) {
			/*;
           	@meta-configuration:
           		{
           			"parser": "function"
           		}
           	@end-meta-configuration
           */

			return SERIALIZE_NULL_TAG;
		} }, { key: "isEqual", value: function isEqual(

		entity) {
			return (
				entity instanceof Null ||
				entity === NULL);

		} }, { key: Meta.BOOLEAN, get: function get() {return false;} }, { key: Meta.STRING, get: function get() {return EMPTY_STRING;} }, { key: Meta.NUMBER, get: function get() {return 0;} }]);return Null;}(Meta);


module.exports = Null;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bGwuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwicmVxdWlyZSIsIkVNUFRZX1NUUklORyIsIk5VTEwiLCJTRVJJQUxJWkVfTlVMTF9UQUciLCJNRVRBX1NFUklBTElaRV9OVUxMX1RBRyIsImNyZWF0ZSIsInNlcmlhbGl6ZSIsIk51bGwiLCJpbnN0YW5jZSIsImluc3RhbmNlT2YiLCJkYXRhIiwicGFyc2VyIiwiYmx1ZXByaW50IiwidGFnIiwiZW50aXR5IiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBLElBQU1BLE9BQU9DLFFBQVMsS0FBVCxHQUFiOztBQUVBLElBQU1DLGVBQWUsRUFBckI7QUFDQSxJQUFNQyxPQUFPLElBQWI7QUFDQSxJQUFNQyxxQkFBcUIsb0JBQTNCO0FBQ0EsSUFBTUMsMEJBQTBCTCxLQUFLTSxNQUFMLENBQWFILElBQWIsRUFBb0JJLFNBQXBCLEVBQWhDLEM7O0FBRU1DLEk7QUFDMEJDLFUsRUFBVTtBQUN4QztBQUNDQSxpQkFBYU4sSUFBYjtBQUNHSCxTQUFLVSxVQUFMLENBQWlCRCxRQUFqQixFQUEyQixJQUEzQixDQUZKOztBQUlBLEc7O0FBRW1CRSxNLEVBQU1DLE0sRUFBUUMsUyxFQUFXO0FBQzVDOzs7Ozs7Ozs7O0FBVUEsVUFBT2IsS0FBS00sTUFBTCxDQUFhLElBQWIsRUFBbUJILElBQW5CLENBQVA7QUFDQSxHOztBQUVvQlcsSyxFQUFLO0FBQ3pCO0FBQ0NBLFlBQVFWLGtCQUFSO0FBQ0dVLFlBQVFULHVCQUZaOztBQUlBLEc7O0FBRUQsaUJBQWM7QUFDTkYsTUFETSxFQUNBLE1BREE7QUFFYixFOzs7Ozs7Ozs7Ozs7OztBQWNVUyxRLEVBQVE7QUFDbEI7Ozs7Ozs7O0FBUUEsVUFBT1Isa0JBQVA7QUFDQSxHOztBQUVRVyxRLEVBQVE7QUFDaEI7QUFDQ0Esc0JBQWtCUCxJQUFsQjtBQUNHTyxlQUFXWixJQUZmOztBQUlBLEcsV0E3QktILEtBQUtnQixPLHNCQUFZLENBQ3RCLE9BQU8sS0FBUCxDQUNBLEMsV0FFS2hCLEtBQUtpQixNLHNCQUFXLENBQ3JCLE9BQU9mLFlBQVAsQ0FDQSxDLFdBRUtGLEtBQUtrQixNLHNCQUFXLENBQ3JCLE9BQU8sQ0FBUCxDQUNBLEMsbUJBM0NpQmxCLEk7OztBQWlFbkJtQixPQUFPQyxPQUFQLEdBQWlCWixJQUFqQiIsImZpbGUiOiJudWxsLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm5vbFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibm9sL251bGwubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJudWxsLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJub2xcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL25vbC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcIm5vbC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHROdWxsIGNsYXNzIHdyYXBwZXIuXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImVobVwiOiBcImVobVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IE1ldGEgPSByZXF1aXJlKCBcImVobVwiICkoICk7XG5cbmNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5jb25zdCBOVUxMID0gbnVsbDtcbmNvbnN0IFNFUklBTElaRV9OVUxMX1RBRyA9IFwiW29iamVjdCBOdWxsOm51bGxdXCI7XG5jb25zdCBNRVRBX1NFUklBTElaRV9OVUxMX1RBRyA9IE1ldGEuY3JlYXRlKCBOVUxMICkuc2VyaWFsaXplKCApO1xuXG5jbGFzcyBOdWxsIGV4dGVuZHMgTWV0YSB7XG5cdHN0YXRpYyBbIFN5bWJvbC5oYXNJbnN0YW5jZSBdKCBpbnN0YW5jZSApe1xuXHRcdHJldHVybiAoXG5cdFx0XHRpbnN0YW5jZSA9PT0gTlVMTFxuXHRcdFx0fHwgTWV0YS5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApXG5cdFx0KTtcblx0fVxuXG5cdHN0YXRpYyBkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRoaXMsIE5VTEwgKTtcblx0fVxuXG5cdHN0YXRpYyBpc0NvbXBhdGlibGUoIHRhZyApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0YWcgPT09IFNFUklBTElaRV9OVUxMX1RBR1xuXHRcdFx0fHwgdGFnID09PSBNRVRBX1NFUklBTElaRV9OVUxMX1RBR1xuXHRcdCk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggKXtcblx0XHRzdXBlciggTlVMTCwgXCJOdWxsXCIgKTtcblx0fVxuXG5cdGdldCBbIE1ldGEuQk9PTEVBTiBdKCApe1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGdldCBbIE1ldGEuU1RSSU5HIF0oICl7XG5cdFx0cmV0dXJuIEVNUFRZX1NUUklORztcblx0fVxuXG5cdGdldCBbIE1ldGEuTlVNQkVSIF0oICl7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRzZXJpYWxpemUoIHBhcnNlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gU0VSSUFMSVpFX05VTExfVEFHO1xuXHR9XG5cblx0aXNFcXVhbCggZW50aXR5ICl7XG5cdFx0cmV0dXJuIChcblx0XHRcdGVudGl0eSBpbnN0YW5jZW9mIE51bGxcblx0XHRcdHx8IGVudGl0eSA9PT0gTlVMTFxuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOdWxsO1xuIl19
//# sourceMappingURL=null.support.js.map
