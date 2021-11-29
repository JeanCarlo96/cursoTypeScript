/* Genéricos en Funciones */

interface Post {
    id: number
}

interface Nota extends Post{
    mensaje: string
}

interface NotaColorida extends Nota {
    color: string
}

interface Foto extends Post{
    url: string
}

interface Video extends Foto {
    duracion: number
}

//HTTP POST /upload
//Alternativa 1
type Publicacion = Nota | NotaColorida | Foto | Video

function subir<
    Publicacion extends Post,
    Extra
>(
    p: Publicacion, 
    e?: Extra
): Publicacion{
    return p
}

let post: Nota = {id: 0, mensaje: 'Hola Mundo'}
let x = subir(post)
//let y = subir(5)