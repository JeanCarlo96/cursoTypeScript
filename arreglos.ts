// arrays
let dias: string[] = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

// tuples
let db: [nombre: string, edad: number, ciudad: string, pagado: boolean] = ['Jean', 25, 'Otavalo', true]

let persona: {
    nombre: string,
    edad: number,
    pais: string,
    fecha_nac: Date,
    mascota: boolean,
    laboral: {
        empresa: string,
        sector: string
    }
} = {
    nombre: 'Pepe Perez',
    edad: 30,
    pais: 'Colombia',
    fecha_nac: new Date(1990, 5, 14),
    mascota: true,
    laboral: {
        empresa: 'Patito S.A',
        sector: 'Informática'
    }
}

let objeto: object = {}


