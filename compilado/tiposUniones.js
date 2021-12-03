"use strict";
/* Uniones de Tipos */
let valor = { uno: true, dos: true };
let valor2 = { tres: false };
function convertir(valor) {
    if (typeof (valor) == "string") {
        valor.trim();
    }
    else if (typeof (valor) == "number") {
        valor.toFixed();
    }
}
convertir('Dos');
convertir(2);
