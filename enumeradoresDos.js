/* Enumeradores Con Valores Computados */
var INICIAL = 8;
function random() {
    return 9;
}
var Permisos;
(function (Permisos) {
    Permisos[Permisos["EscribirMensajes"] = random()] = "EscribirMensajes";
    Permisos[Permisos["Reaccionar"] = Permisos.EscribirMensajes * 2] = "Reaccionar";
    Permisos[Permisos["EnviarEnlaces"] = Permisos.Reaccionar * 2] = "EnviarEnlaces";
    Permisos[Permisos["ConectarseACanalesDeVoz"] = Permisos.EnviarEnlaces * 2] = "ConectarseACanalesDeVoz";
})(Permisos || (Permisos = {}));
