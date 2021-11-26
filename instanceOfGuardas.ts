/* instanceOf & las guardas */
//Instance Of
class Coche {
    fabricante: string = 'honda'
    anio: number = 2020
}

let c: Coche = new Coche()
console.log(c instanceof Coche)

interface Celular {
    marca: string
    anio: number
}

let x: Celular = {
    marca: 'Samsung',
    anio:2019
}

//InstanceOf no aplicable a interfaces
//console.log(x instanceof Celular)

//guardas

interface Geometria {
    lados: number
    pintar(): void
}

interface Triangulo extends Geometria {
    base: number
    altura: number
}

interface Cuadrado extends Geometria {
    lado: number
}

function esUnaGeometria(x: any): x is Geometria {
    return x.lados && x.pintar
}

function esUnCuadrado(x: any): x is Cuadrado {
    return esUnaGeometria(x) && (x as any).lado
}

function esUnTriangulo(x: any): x is Triangulo {
    return esUnaGeometria(x) && (x as any).lado && (x as any).altura
}

function procesar(g: Geometria){
    if(esUnCuadrado(g)){
        g.lado
    }else if(esUnTriangulo(g)) {
        g.base
    }
}