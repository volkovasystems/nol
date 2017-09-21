"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "nol",
              			"path": "nol/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/nol.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should/as-function",
              			"nol": "nol"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var nol = require("./nol.support.js");
//: @end-client







//: @client:

describe("nol", function () {

	describe("`nol( )`", function () {
		it("should return Null instance", function () {
			var data = nol();

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "object");

			assert.equal(data.constructor.name, "Null");

			assert.equal(data.valueOf(), null);

		});
	});

	describe("`nol( null )`", function () {
		it("should return Null instance", function () {
			var data = nol(null);

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "object");

			assert.equal(data.constructor.name, "Null");

			assert.equal(data.valueOf(), null);
		});
	});

	describe("`nol( null ).toString( )`", function () {
		it("should return string type", function () {
			var result = nol(null).toString();

			assert.equal(typeof result === "undefined" ? "undefined" : (0, _typeof3.default)(result), "string");

			assert.equal(result, "");

		});
	});

	describe("`nol( null ).toNumber( )`", function () {
		it("should return number type", function () {
			var result = nol(null).toNumber();

			assert.equal(typeof result === "undefined" ? "undefined" : (0, _typeof3.default)(result), "number");

			assert.equal(result, 0);

		});
	});

	describe("`nol( null ).toBoolean( )`", function () {
		it("should return boolean type", function () {
			var result = nol(null).toBoolean();

			assert.equal(typeof result === "undefined" ? "undefined" : (0, _typeof3.default)(result), "boolean");

			assert.equal(result, false);

		});
	});

	describe("`nol( null ).toObject( )`", function () {
		it("should return object type", function () {
			var descriptor = nol(null).toObject();

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);
		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibm9sIiwiZGVzY3JpYmUiLCJpdCIsImRhdGEiLCJlcXVhbCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInZhbHVlT2YiLCJyZXN1bHQiLCJ0b1N0cmluZyIsInRvTnVtYmVyIiwidG9Cb29sZWFuIiwiZGVzY3JpcHRvciIsInRvT2JqZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsTUFBTUQsUUFBUyxrQkFBVCxDQUFaO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsS0FBVixFQUFpQixZQUFPOztBQUV2QkEsVUFBVSxVQUFWLEVBQXNCLFlBQU87QUFDNUJDLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6QyxPQUFJQyxPQUFPSCxLQUFYOztBQUVBRixVQUFPTSxLQUFQLFFBQXFCRCxJQUFyQix1REFBcUJBLElBQXJCLEdBQTJCLFFBQTNCOztBQUVBTCxVQUFPTSxLQUFQLENBQWNELEtBQUtFLFdBQUwsQ0FBaUJDLElBQS9CLEVBQXFDLE1BQXJDOztBQUVBUixVQUFPTSxLQUFQLENBQWNELEtBQUtJLE9BQUwsRUFBZCxFQUErQixJQUEvQjs7QUFFQSxHQVREO0FBVUEsRUFYRDs7QUFhQU4sVUFBVSxlQUFWLEVBQTJCLFlBQU87QUFDakNDLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6QyxPQUFJQyxPQUFPSCxJQUFLLElBQUwsQ0FBWDs7QUFFQUYsVUFBT00sS0FBUCxRQUFxQkQsSUFBckIsdURBQXFCQSxJQUFyQixHQUEyQixRQUEzQjs7QUFFQUwsVUFBT00sS0FBUCxDQUFjRCxLQUFLRSxXQUFMLENBQWlCQyxJQUEvQixFQUFxQyxNQUFyQzs7QUFFQVIsVUFBT00sS0FBUCxDQUFjRCxLQUFLSSxPQUFMLEVBQWQsRUFBK0IsSUFBL0I7QUFDQSxHQVJEO0FBU0EsRUFWRDs7QUFZQU4sVUFBVSwyQkFBVixFQUF1QyxZQUFPO0FBQzdDQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkMsT0FBSU0sU0FBU1IsSUFBSyxJQUFMLEVBQVlTLFFBQVosRUFBYjs7QUFFQVgsVUFBT00sS0FBUCxRQUFxQkksTUFBckIsdURBQXFCQSxNQUFyQixHQUE2QixRQUE3Qjs7QUFFQVYsVUFBT00sS0FBUCxDQUFjSSxNQUFkLEVBQXNCLEVBQXRCOztBQUVBLEdBUEQ7QUFRQSxFQVREOztBQVdBUCxVQUFVLDJCQUFWLEVBQXVDLFlBQU87QUFDN0NDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QyxPQUFJTSxTQUFTUixJQUFLLElBQUwsRUFBWVUsUUFBWixFQUFiOztBQUVBWixVQUFPTSxLQUFQLFFBQXFCSSxNQUFyQix1REFBcUJBLE1BQXJCLEdBQTZCLFFBQTdCOztBQUVBVixVQUFPTSxLQUFQLENBQWNJLE1BQWQsRUFBc0IsQ0FBdEI7O0FBRUEsR0FQRDtBQVFBLEVBVEQ7O0FBV0FQLFVBQVUsNEJBQVYsRUFBd0MsWUFBTztBQUM5Q0MsS0FBSSw0QkFBSixFQUFrQyxZQUFPO0FBQ3hDLE9BQUlNLFNBQVNSLElBQUssSUFBTCxFQUFZVyxTQUFaLEVBQWI7O0FBRUFiLFVBQU9NLEtBQVAsUUFBcUJJLE1BQXJCLHVEQUFxQkEsTUFBckIsR0FBNkIsU0FBN0I7O0FBRUFWLFVBQU9NLEtBQVAsQ0FBY0ksTUFBZCxFQUFzQixLQUF0Qjs7QUFFQSxHQVBEO0FBUUEsRUFURDs7QUFXQVAsVUFBVSwyQkFBVixFQUF1QyxZQUFPO0FBQzdDQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkMsT0FBSVUsYUFBYVosSUFBSyxJQUFMLEVBQVlhLFFBQVosRUFBakI7O0FBRUFmLFVBQU9NLEtBQVAsUUFBcUJRLFVBQXJCLHVEQUFxQkEsVUFBckIsR0FBaUMsUUFBakM7O0FBRUFkLFVBQU9NLEtBQVAsQ0FBYyxVQUFVUSxVQUF4QixFQUFvQyxJQUFwQzs7QUFFQWQsVUFBT00sS0FBUCxDQUFjLFVBQVVRLFVBQXhCLEVBQW9DLElBQXBDOztBQUVBZCxVQUFPTSxLQUFQLENBQWMsV0FBV1EsVUFBekIsRUFBcUMsSUFBckM7O0FBRUFkLFVBQU9NLEtBQVAsQ0FBYyxZQUFZUSxVQUExQixFQUFzQyxJQUF0QztBQUNBLEdBWkQ7QUFhQSxFQWREOztBQWdCQSxDQTVFRDs7QUE4RUEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJub2xcIixcblx0XHRcdFwicGF0aFwiOiBcIm5vbC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbm9sLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZC9hcy1mdW5jdGlvblwiLFxuXHRcdFx0XCJub2xcIjogXCJub2xcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IG5vbCA9IHJlcXVpcmUoIFwiLi9ub2wuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcIm5vbFwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBub2woIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBOdWxsIGluc3RhbmNlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGF0YSA9IG5vbCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGF0YSwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRhdGEuY29uc3RydWN0b3IubmFtZSwgXCJOdWxsXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkYXRhLnZhbHVlT2YoICksIG51bGwgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBub2woIG51bGwgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIE51bGwgaW5zdGFuY2VcIiwgKCApID0+IHtcblx0XHRcdGxldCBkYXRhID0gbm9sKCBudWxsICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGRhdGEsIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkYXRhLmNvbnN0cnVjdG9yLm5hbWUsIFwiTnVsbFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YS52YWx1ZU9mKCApLCBudWxsICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG5vbCggbnVsbCApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBub2woIG51bGwgKS50b1N0cmluZyggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcmVzdWx0LCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIlwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbm9sKCBudWxsICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBudW1iZXIgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IG5vbCggbnVsbCApLnRvTnVtYmVyKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiByZXN1bHQsIFwibnVtYmVyXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIDAgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBub2woIG51bGwgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBib29sZWFuIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBub2woIG51bGwgKS50b0Jvb2xlYW4oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHJlc3VsdCwgXCJib29sZWFuXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbm9sKCBudWxsICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBub2woIG51bGwgKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
