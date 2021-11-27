/* Tipos enumeradores */
enum DiasSemana {
    //Lunes = 401,
    Lunes = 'Lunes',
    Martes = 'Martes',
    Miercoles = 'Miercoles',
    //Jueves = 701,
    Jueves = 'Jueves',
    Viernes = 'Viernes',
    Sabado = 'Sabado',
    Domingo = 'Domingo',
}

interface CitaMedica {
    dia: DiasSemana
}

let c: CitaMedica = {
    dia: DiasSemana.Lunes
    //dia: 2
}

console.log(c.dia)