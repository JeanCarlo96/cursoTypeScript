/* Tipos de Utilidad */

interface Todo {
    title: string;
    description: string;
}

// Hace los campos opcionales
let t: Partial<Todo> = {
    title: 'Hola'
}

//Link a la lista completa de Tipos
//https://www.typescriptlang.org/docs/handbook/utility-types.html