/* Uniones de Tipos */
var valor = { uno: true, dos: true };
var valor2 = { tres: false };
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
