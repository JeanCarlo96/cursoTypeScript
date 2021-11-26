/* instanceOf & las guardas */
//Instance Of
var Coche = /** @class */ (function () {
    function Coche() {
        this.fabricante = 'honda';
        this.anio = 2020;
    }
    return Coche;
}());
var c = new Coche();
console.log(c instanceof Coche);
var x = {
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
