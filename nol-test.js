const assert = require( "assert" );
const nol = require( "./nol.js" );

assert.equal( JSON.stringify( nol( ) ), '"[object Null]"', "should be equal" );

assert.equal( `${ nol( ) }`, "", "should be empty string" );

assert.equal( +nol( ), 0, "should have value 0" );

assert.equal( !!( nol( ) ), true, "should be true" );

assert.equal( ( nol( ) ) + "", "false", "should be 'false'" );

assert.equal( ( nol( "[object Null]" ) ) + "", "false", "should be 'false'" );

console.log( "ok" );
