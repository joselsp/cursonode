"use strict";

//constructor de objetos

function Coche(ruedas){
    this.ruedas = ruedas;

    this.cuantasRuedas = function () {
        //console.log('this', this); //mostramos quien es el this en este caso 
        console.log('tiene', this.ruedas, 'ruedas');
    };
}

const todoterreno = new Coche(4);

//regla del parentesis para saber quien es el this
//setTimeout(todoterreno.cuantasRuedas, 1000);
// corregimos problema de perder el this al llamarse el metodo desde otro sitio
//setTimeout(todoterreno.cuantasRuedas.bind(todoterreno), 1000);

const autobus = new Coche(12);

autobus.cuantasRuedas.call(todoterreno);