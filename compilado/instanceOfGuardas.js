"use strict";
/* instanceOf & las guardas */
//Instance Of
class Coche {
    constructor() {
        this.fabricante = 'honda';
        this.anio = 2020;
    }
}
let c = new Coche();
console.log(c instanceof Coche);
let x = {
    marca: 'Samsung',
    anio: 2019
};
function esUnaGeometria(x) {
    return x.lados && x.pintar;
}
function esUnCuadrado(x) {
    return esUnaGeometria(x) && x.lado;
}
function esUnTriangulo(x) {
    return esUnaGeometria(x) && x.lado && x.altura;
}
function procesar(g) {
    if (esUnCuadrado(g)) {
        g.lado;
    }
    else if (esUnTriangulo(g)) {
        g.base;
    }
}
