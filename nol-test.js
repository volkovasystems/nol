
const nol = require( "./nol.js" );

console.log( nol( ) );

console.log( JSON.stringify( nol( ) ) );

console.log( `${ nol( ) }` );

console.log( +nol( ) );

console.log( !!( nol( ) ) );

console.log( ( nol( ) ) + "" );

console.log( ( nol( "[object Null]" ) ) + "" );
