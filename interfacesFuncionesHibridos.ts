/* Interfaces: funciones y tipos hibridos */

//Interfaz que se comporta como función
//type Comparator = (a: string, b: string) => number

type Comparator2 = {
    (primero: string, segundo: string): number
    algoritmo: string
    seguro: boolean
}

interface Comparator {
    (first: string, second: string): number

    algorithm: string
    safe: boolean
}

function sort(c: Comparator) {
    //c.algorithm = 'Short'
    //c.safe = true

    let out = c('first', 'second')

    console.log('Ordenando con el criterio: ' + c.algorithm)
}
