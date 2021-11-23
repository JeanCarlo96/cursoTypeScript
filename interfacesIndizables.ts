/* Interfaces Indizadas */

interface Indizable {
    [index: string]: boolean
}

let l: Indizable = {}

let k = l['4']