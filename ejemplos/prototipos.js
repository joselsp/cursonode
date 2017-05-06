"use strict";

// definimos una funcion constructora de objetos
function Persona(name){
    this.name = name;
}

// construir un objeto

const luis = new Persona('Luis');

// añadir propiedades al prototipo de las personas
Persona.prototype.saluda = function(){
    console.log('Hola, me llamo', this.name);
}

// Ahor todas las personas creadas y las nuevas que se creen podran saludar
luis.saluda();

// Herencia de persona ---------------------------------------------------

function Agente(name) {
    Persona.call(this, name);
    // heredar el constructor de personas
}

// heredamos sus propiedades (y metodos)
Agente.prototype = new Persona('soy un prototipo'); 

const smith = new Agente('Smith');

smith.saluda();

console.log(
    smith instanceof Agente,
    smith instanceof Persona,
    smith instanceof Object
);

// Herencia multiple -----------------------------------------------------

//Mixin Superheroe (patron superheroes)
function Superheroe() {
    this.vuela = function() {
        console.log(this.name, 'vuela');        
    }
    this.esquivaBalas = function() {
        console.log(this.name, 'esquiva balas')
    }
}

// copiamos todas las propiedades de Superheroe al prototipo de Agente
Object.assign(Agente.prototype, new Superheroe())

smith.esquivaBalas();
smith.vuela();