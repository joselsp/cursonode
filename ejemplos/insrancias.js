"use strict";

// creamos una funcion para usarla como constructor de objetos
function Fruta(nombre){

    //nadie puede acceder a ni variable nombre sin los metodos
    // usamos this para poner cosas al objecto que se creara
    this.setNombre = function(valor) {
        nombre = valor;
    }

    this.getNombre = function() {
        return nombre;
    }
}

// creamos un objeto con el constructor
const limon = new Fruta('limon');

console.log(limon);

console.log(limon.getNombre());

limon.setNombre('naranja');

console.log(limon.getNombre());