/* Herencia */

abstract class Vehiculo {

    protected fabricante: string

    constructor(fabricante: string){
        this.fabricante = fabricante
    }

    moverse(){
        console.log('El vehículo ' + this.fabricante + ' se ha movido magicamente')
    }

    protected llevarAlTaller() {
            console.log('al taller que va ')
    }
}

class VehiculoTerrestre extends Vehiculo{

    private tipo: string

    constructor(fabricante: string, tipo: string){
        super(fabricante)
        this.tipo = tipo
    }

    moverse(){
        console.log('brum brum hace mi ' + this.tipo)
        super.moverse()
    }

    reparar(){
        console.log('Un momento que me leo el manual de instrucciones de ' + this.fabricante)
    }
}

class VehiculoAereo extends Vehiculo{
    moverse(){
        console.log('niauuuun')
        super.moverse()
    }

    reparar(){
        this.reparar()
    }
}

class VehiculoMarino extends Vehiculo{
    moverse() {
        console.log('* el ruido del mar *')
        super.moverse()
    }
}

//No se puede instanciar una clase Abstracta
//let nuevoVehiculo = new Vehiculo("Patito")

let vehiculo = new VehiculoTerrestre("Yamaha", "moto")
vehiculo.moverse()

let otroVehiculo: Vehiculo = new VehiculoAereo("Airbus")
otroVehiculo.moverse()