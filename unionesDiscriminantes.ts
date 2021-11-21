/* Uniones Discriminantes */

type OperacionSuma = {
    sumando1: number,
    sumando2: number,
    tipo: 'suma'
}

type OperacionMultiplicar = {
    operando1: number,
    operando2: number,
    tipo: 'multiplicar'
}

type Operacion = OperacionSuma | OperacionMultiplicar

function operar(o: Operacion) {
    if(o.tipo == 'suma') {
        console.log('Resultado: ' + (o.sumando1 + o.sumando2))
    }else if (o.tipo == 'multiplicar') {
        console.log('Resultado: ' + (o.operando1 * o. operando2))
    }
}

operar({sumando1: 10, sumando2: 20, tipo: 'suma'})
operar({operando1: 5, operando2: 12, tipo: 'multiplicar'})