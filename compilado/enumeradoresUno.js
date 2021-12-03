"use strict";
/* Tipos enumeradores */
var DiasSemana;
(function (DiasSemana) {
    //Lunes = 401,
    DiasSemana["Lunes"] = "Lunes";
    DiasSemana["Martes"] = "Martes";
    DiasSemana["Miercoles"] = "Miercoles";
    //Jueves = 701,
    DiasSemana["Jueves"] = "Jueves";
    DiasSemana["Viernes"] = "Viernes";
    DiasSemana["Sabado"] = "Sabado";
    DiasSemana["Domingo"] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
let c = {
    dia: DiasSemana.Lunes
    //dia: 2
};
console.log(c.dia);
