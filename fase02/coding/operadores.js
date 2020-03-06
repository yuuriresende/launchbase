/////////////////////////////////////////////////////////////////////////////////////////
//Operadores relacionais

// > - Maior que
// < - Menor que
// >= Maior igual a
// <= Menor igual a

const a = 5
const b = 6

console.log( a > b ) //false
console.log( a < b ) //true
console.log( a >= b )//false
console.log( a <= b )//true

/////////////////////////////////////////////////////////////////////////////////////////
//operadores de igualdade

// == Igual a 
// != Diferente de
// === Igual e do mesmo tipo a
// !== Diferente inclusive do tipo

const c = 5
const d = '5'

console.log( c == d ) //true
console.log( c === d )//false 
console.log( c != d)  //false
console.log ( c !== d)//true

/////////////////////////////////////////////////////////////////////////////////////////
//operadores logicos - sao tipicamente usados com valores booleanos (true e false)
// nos ajudam a criar expressões lógicas a partir de dois ou mais valores

//&&    "E"   Vai comparar dois booleanos, e retornar verdadeiro caso as DUAS 
//            expressões sejam verdadeiras
//||    "OU"  Vai comparar dois booleanos, e retornar verdadeuiro caso UMA DAS DUAS
//            expressoes sejam verdadeiras
//!     "NAO" Vai negar uma expressao

console.log( c == d && c !== d) //true (true & true = true)
console.log( c == d && c != d)  //false (true & false = false)

console.log( c == d || c !== d) //true (true || true = true)
console.log( c == d || c != d)  //true (true || false = true)
console.log( c === d || c != d )//false (false || false = false)

console.log( ! (c === d || c != d) )//true (! (false || false) = true )
console.log( !true ) // false (!true = false) 

/////////////////////////////////////////////////////////////////////////////////////////
//operadores aritmeticos

// *    Multiplicacao
// /    Divisao
// %    Resto da divisao
// +    Soma
// -    Subtracao

console.log( 2 * 2 ) // resultado = 4
console.log( 2 / 2 ) // resultado = 1
console.log( 3 % 2 ) // resultado = 1
console.log( 2 + 2 ) // resultado = 4
console.log( 2 - 2 ) // resultado = 0