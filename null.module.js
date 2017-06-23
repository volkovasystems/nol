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
*/

const NULL = null;
const NULL_TAG = Object.prototype.toString.call( NULL );

const NAME = Symbol.for( "name" );
const VALUE = Symbol.for( "value" );
const TYPE = Symbol.for( "type" );

class Null {
	static [ Symbol.hasInstance ]( instance ){
		return instance === NULL || ( instance || { } ).constructor === Null;
	}

	constructor( entity ){
		if( ( typeof entity == "string" && entity === NULL_TAG ) ||
			entity === NULL || !arguments.length )
		{
			this[ NAME ] = "null";
			this[ VALUE ] = entity || NULL;
			this[ TYPE ] = typeof this.value;

		}else if( arguments.length ){
			throw new Error( `invalid null value, ${ entity }` );
		}
	}

	toString( ){
		return NULL_TAG;
	}

	get [ Symbol.toStringTag ]( ){
		return "Null";
	}

	valueOf( ){
		return NULL;
	}

	[ Symbol.toPrimitive ]( hint ){
		switch( hint ){
			case "string":
				return "";

			case "number":
				return 0;

			default:
				return false;
		}
	}

	toJSON( ){
		return this.toString( );
	}
}

module.exports = Null;
