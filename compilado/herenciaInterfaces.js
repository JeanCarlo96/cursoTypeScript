"use strict";
/* Herencia de Interfaces */
class OpelCorsa {
    constructor() {
        this.fabricante = 'Opel';
    }
    conducir() {
        console.log('brum brum');
    }
    arrancarMotor() {
        console.log('turururururrur');
    }
    respostar() {
        console.log('Echando 20 euros de gasolina');
    }
    detenerMotor() {
        console.log('tururur.....');
    }
    abrirMaletero() {
        console.log('El maletero está abierto');
    }
}
function procesar(v) {
    v.conducir();
}
procesar(new OpelCorsa());
let naveEspacial = {
    numeroAlas: 10,
    lanzar() {
        console.log('Estamos Lanzando');
    },
    despegar() {
        console.log('Listos para el despegue');
    }
};
naveEspacial.despegar();
naveEspacial.lanzar();
