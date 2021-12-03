"use strict";
/* Getters and Setters */
class Rectangulo {
    constructor(ancho, alto) {
        this._nombre = "";
        console.log('Constructor');
        this.ancho = ancho;
        this.alto = alto;
    }
    /*area() {
        return this.ancho * this.alto
    }*/
    get area() {
        console.log('getter de área');
        return this.ancho * this.alto;
    }
    get nombre() {
        console.log("getter nombre");
        return this._nombre;
    }
    set nombre(value) {
        console.log("setter nombre");
        this._nombre = value;
    }
    perimetro() {
        return this.alto * 2 + this.ancho * 2;
    }
}
let r1 = new Rectangulo(5, 10);
r1.nombre = "A";
console.log("El rectángulo " + r1.nombre);
