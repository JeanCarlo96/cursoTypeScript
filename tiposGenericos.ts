/* Tipos Genéricos */
//interface Respuesta<T, U> {
    interface Respuesta<Mensaje, Extra> {
        type: string,
        success: boolean,
        message: Mensaje,
        whaterer?:Extra, 
    }
    
    let payload: Respuesta<string, number> = {
        type: 'post',
        success: true,
        message: 'asdaskdm'
    }
    
    let payload2: Respuesta<boolean, object> = {
        type: 'error',
        success: false,
        message: true,
    }