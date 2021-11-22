/* Herencia de Interfaces */
var OpelCorsa = /** @class */ (function () {
    function OpelCorsa() {
        this.fabricante = 'Opel';
    }
    OpelCorsa.prototype.conducir = function () {
        console.log('brum brum');
    };
    OpelCorsa.prototype.arrancarMotor = function () {
        console.log('turururururrur');
    };
    OpelCorsa.prototype.respostar = function () {
        console.log('Echando 20 euros de gasolina');
    };
    OpelCorsa.prototype.detenerMotor = function () {
        console.log('tururur.....');
    };
    OpelCorsa.prototype.abrirMaletero = function () {
        console.log('El maletero está abierto');
    };
    return OpelCorsa;
}());
function procesar(v) {
    v.conducir();
}
procesar(new OpelCorsa());
var naveEspacial = {
    numeroAlas: 10,
    lanzar: function () {
        console.log('Estamos Lanzando');
    },
    despegar: function () {
        console.log('Listos para el despegue');
    }
};
naveEspacial.despegar();
naveEspacial.lanzar();
