/* Herencia */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    function Vehiculo(fabricante) {
        this.fabricante = fabricante;
    }
    Vehiculo.prototype.moverse = function () {
        console.log('El vehículo ' + this.fabricante + ' se ha movido magicamente');
    };
    Vehiculo.prototype.llevarAlTaller = function () {
        console.log('al taller que va ');
    };
    return Vehiculo;
}());
var VehiculoTerrestre = /** @class */ (function (_super) {
    __extends(VehiculoTerrestre, _super);
    function VehiculoTerrestre(fabricante, tipo) {
        var _this = _super.call(this, fabricante) || this;
        _this.tipo = tipo;
        return _this;
    }
    VehiculoTerrestre.prototype.moverse = function () {
        console.log('brum brum hace mi ' + this.tipo);
        _super.prototype.moverse.call(this);
    };
    VehiculoTerrestre.prototype.reparar = function () {
        console.log('Un momento que me leo el manual de instrucciones de ' + this.fabricante);
    };
    return VehiculoTerrestre;
}(Vehiculo));
var VehiculoAereo = /** @class */ (function (_super) {
    __extends(VehiculoAereo, _super);
    function VehiculoAereo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehiculoAereo.prototype.moverse = function () {
        console.log('niauuuun');
        _super.prototype.moverse.call(this);
    };
    VehiculoAereo.prototype.reparar = function () {
        this.reparar();
    };
    return VehiculoAereo;
}(Vehiculo));
var VehiculoMarino = /** @class */ (function (_super) {
    __extends(VehiculoMarino, _super);
    function VehiculoMarino() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehiculoMarino.prototype.moverse = function () {
        console.log('* el ruido del mar *');
        _super.prototype.moverse.call(this);
    };
    return VehiculoMarino;
}(Vehiculo));
//No se puede instanciar una clase Abstracta
//let nuevoVehiculo = new Vehiculo("Patito")
var vehiculo = new VehiculoTerrestre("Yamaha", "moto");
vehiculo.moverse();
var otroVehiculo = new VehiculoAereo("Airbus");
otroVehiculo.moverse();
