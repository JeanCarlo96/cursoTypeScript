/* Interfaces: funciones y tipos hibridos */
function sort(c) {
    //c.algorithm = 'Short'
    //c.safe = true
    var out = c('first', 'second');
    console.log('Ordenando con el criterio: ' + c.algorithm);
}
