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
*/

const assert = require( "should/as-function" );

//: @server:
const nol = require( "./nol.js" );
//: @end-server

//: @client:
const nol = require( "./nol.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "nol", ( ) => {

	describe( "`nol( )`", ( ) => {
		it( "should return Null instance", ( ) => {
			let data = nol( );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Null" );

			assert.equal( data.valueOf( ), null );

		} );
	} );

	describe( "`nol( null )`", ( ) => {
		it( "should return Null instance", ( ) => {
			let data = nol( null );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Null" );

			assert.equal( data.valueOf( ), null );
		} );
	} );

	describe( "`nol( null ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let result = nol( null ).toString( );

			assert.equal( typeof result, "string" );

			assert.equal( result, "" );

		} );
	} );

	describe( "`nol( null ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			let result = nol( null ).toNumber( );

			assert.equal( typeof result, "number" );

			assert.equal( result, 0 );

		} );
	} );

	describe( "`nol( null ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			let result = nol( null ).toBoolean( );

			assert.equal( typeof result, "boolean" );

			assert.equal( result, false );

		} );
	} );

	describe( "`nol( null ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let descriptor = nol( null ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );
		} );
	} );

} );

//: @end-server


//: @client:

describe( "nol", ( ) => {

	describe( "`nol( )`", ( ) => {
		it( "should return Null instance", ( ) => {
			let data = nol( );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Null" );

			assert.equal( data.valueOf( ), null );

		} );
	} );

	describe( "`nol( null )`", ( ) => {
		it( "should return Null instance", ( ) => {
			let data = nol( null );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Null" );

			assert.equal( data.valueOf( ), null );
		} );
	} );

	describe( "`nol( null ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let result = nol( null ).toString( );

			assert.equal( typeof result, "string" );

			assert.equal( result, "" );

		} );
	} );

	describe( "`nol( null ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			let result = nol( null ).toNumber( );

			assert.equal( typeof result, "number" );

			assert.equal( result, 0 );

		} );
	} );

	describe( "`nol( null ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			let result = nol( null ).toBoolean( );

			assert.equal( typeof result, "boolean" );

			assert.equal( result, false );

		} );
	} );

	describe( "`nol( null ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let descriptor = nol( null ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );
		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "nol", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`nol( )`", ( ) => {
		it( "should return Null instance", ( ) => {
			//: @ignore:
			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof nol( ); } ).value, "object" );
			//: @end-ignore

			assert.equal( browser.url( bridgeURL ).execute( ( ) => nol( ).constructor.name ).value, "Null" );

			assert.equal( browser.url( bridgeURL ).execute( ( ) => `${ nol( ).valueOf( ) }` ).value, "null" );

		} );
	} );

	describe( "`nol( null )`", ( ) => {
		it( "should return Null instance", ( ) => {
			//: @ignore:
			let testA = browser.url( bridgeURL ).execute(

				function( ){
					let data = nol( null );

					return typeof data;
				}

			).value;
			//: @end-ignore
			assert.equal( testA, "object" );


			let testB = browser.url( bridgeURL ).execute(

				function( ){
					let data = nol( null );

					return data.constructor.name;
				}

			).value;

			assert.equal( testB, "Null" );


			let testC = browser.url( bridgeURL ).execute(

				function( ){
					let data = nol( null );

					return data.valueOf( );
				}

			).value;

			assert.equal( testC, null );
		} );
	} );

	describe( "`nol( null ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return nol( null ).toString( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "" );
		} );
	} );

	describe( "`nol( null ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return nol( null ).toNumber( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, 0 );
		} );
	} );

	describe( "`nol( null ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return nol( null ).toBoolean( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, false );
		} );
	} );

	describe( "`nol( null ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let descriptor = nol( null ).toObject( );

					let test = typeof descriptor == "object" &&
						"type" in descriptor == true &&
						"name" in descriptor == true &&
						"value" in descriptor == true &&
						"format" in descriptor == true;

					return test;
				}

			).value;
			//: @end-ignore

			assert.equal( result, true );
		} );
	} );

} );

//: @end-bridge
