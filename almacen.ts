/* Exportando Módulos */

export type Producto = {
    sku: string,
    nombre: string,
    descripcion: string,
    precio: number,
    urlFoto: string,
}

type Almacen = {
    [shu: string]: {
        stock: number,
        ultimaEntrega: Date,
    }
}

function computarStock(a: Almacen){

}

export function sumarTotal(productos: Producto[]) {
    let precio = 0;
    for(let producto of productos){
        precio += producto.precio
    }    
    return precio
}