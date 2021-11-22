/* Herencia de Interfaces */

interface Vehiculo {
    readonly fabricante: string
    arrancarMotor(): void
    respostar(): void
    detenerMotor(): void
}

type VehiculoAereo = {
    readonly numeroAlas: number
    despegar(): void
}

type VehiculoEspacial = VehiculoAereo & {
    lanzar(): void
}

interface VehiculoTerrestre extends Vehiculo{
    conducir(): void
}

interface vechiculoMaritimo extends Vehiculo{
    sonarSirena(): void
    encenderChimenea(): void
    detenerChimenea(): void
}

class OpelCorsa implements VehiculoTerrestre {

    fabricante: string = 'Opel'

    conducir(): void {
        console.log('brum brum')
    }
    
    arrancarMotor(): void {
        console.log('turururururrur')
    }

    respostar(): void {
        console.log('Echando 20 euros de gasolina')
    }
    detenerMotor(): void {
        console.log('tururur.....')
    }

    abrirMaletero(): void {
        console.log('El maletero está abierto')
    }

}

function procesar(v: VehiculoTerrestre ): void {
    v.conducir()
}

procesar(new OpelCorsa())

let naveEspacial: VehiculoEspacial = {
    numeroAlas: 10,
    lanzar(){
        console.log('Estamos Lanzando')
    },
    despegar(){
        console.log('Listos para el despegue')
    }

}

naveEspacial.despegar()
naveEspacial.lanzar()