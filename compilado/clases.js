"use strict";
/* Clases */
class Rectangulo {
    constructor(ancho, alto) {
        console.log('Constructor');
        this.ancho = ancho;
        this.alto = alto;
    }
    area() {
        return this.ancho * this.alto;
    }
    perimetro() {
        return this.alto * 2 + this.ancho * 2;
    }
}
let r1 = new Rectangulo(5, 10);
console.log(r1.area());
let r2 = new Rectangulo(10, 15);
console.log(r2.area());
