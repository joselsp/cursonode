"use strict";

/* Otra manera de exportar directamente el codigo de abajo

module.exports.suma = function suma(a, b){
    return a + b;
}

module.exports.resta = function resta(a, b){
    return a - b;
}

*/

console.log('Modulo calculadora se esta inicializaando');
console.log('Ya esttá!');

function suma (a, b){
    return a + b;
}

function resta(a, b) {
    return a -b;
}

module.exports = {
    suma: suma,
    resta: resta
}

// si usamos el alias (sin module, a la izquierda) nunca
// le podemos asignar nada porque rompemos el alias
//exports = suma;
// exports.multiplica = {};  Seria correcto
