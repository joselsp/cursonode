"use strict";

const calculadora = require('./calculadora');

calculadora.marca = 'Siemens'

console.log(calculadora.suma(5,3));

const otraCalculadora = require('./calculadora');

console.log(otraCalculadora.marca); //es un singleton 