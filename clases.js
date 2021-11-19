/* Clases */
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, alto) {
        console.log('Constructor');
        this.ancho = ancho;
        this.alto = alto;
    }
    Rectangulo.prototype.area = function () {
        return this.ancho * this.alto;
    };
    Rectangulo.prototype.perimetro = function () {
        return this.alto * 2 + this.ancho * 2;
    };
    return Rectangulo;
}());
var r1 = new Rectangulo(5, 10);
console.log(r1.area());
var r2 = new Rectangulo(10, 15);
console.log(r2.area());
