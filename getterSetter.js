/* Getters and Setters */
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, alto) {
        this._nombre = "";
        console.log('Constructor');
        this.ancho = ancho;
        this.alto = alto;
    }
    Object.defineProperty(Rectangulo.prototype, "area", {
        /*area() {
            return this.ancho * this.alto
        }*/
        get: function () {
            console.log('getter de área');
            return this.ancho * this.alto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangulo.prototype, "nombre", {
        get: function () {
            console.log("getter nombre");
            return this._nombre;
        },
        set: function (value) {
            console.log("setter nombre");
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Rectangulo.prototype.perimetro = function () {
        return this.alto * 2 + this.ancho * 2;
    };
    return Rectangulo;
}());
var r1 = new Rectangulo(5, 10);
r1.nombre = "A";
console.log("El rectángulo " + r1.nombre);
