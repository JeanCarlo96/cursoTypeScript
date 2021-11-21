/* Uniones de Tipos */

type A = {
    uno: boolean,
    dos: boolean
}

type B = {
    tres: boolean
}

let valor: A | B = {uno: true, dos: true}

let valor2: A | B = {tres: false}

function convertir(valor: string | number) {
    if(typeof(valor) == "string"){
        valor.trim()
    }else if(typeof(valor) == "number"){
        valor.toFixed()
    }
}

convertir('Dos')
convertir(2)