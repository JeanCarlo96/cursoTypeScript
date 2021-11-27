/* Enumeradores Con Valores Computados */
const INICIAL = 8

function random() {
    return 9
}

enum Permisos {
    EscribirMensajes = random(),
    Reaccionar = EscribirMensajes * 2,
    EnviarEnlaces = Reaccionar * 2,
    ConectarseACanalesDeVoz = EnviarEnlaces * 2,
}