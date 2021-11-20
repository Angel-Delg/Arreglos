//Declaramos un arreglo
const colores = ['Blanco','Negro','Azul',['Dorado','Platiado']]

//Acceder a un elemento de array mediante su indice
const primero = colores[0];
const ultimo = colores[colores.length - 1];

//Accedemos al ultimo valor del arreglo anidado.
console.log( ultimo[ultimo.length - 1] )

colores.forEach( ( elemento,indice ) =>  {
    console.log( elemento, indice )
})

//Añodir elemento al final de un array
let nuevaLongitud = colores.push('Celeste')
console.log(nuevaLongitud)

//Eleminar el ultimo elemento de un array
let borrar = colores.pop()
console.log(borrar)

//Añadir un elemento al inicio de un array
nuevaLongitud = colores.unshift('Rojo')
console.log( colores )

//Eleminar el primer elemento de un array
let datoBorrado = colores.shift()
console.log( colores )

//Encontrar el indicee de un elemento array
// colores.push('Cromado')
// let posicion = colores.indexOf('Cromado')
// console.log(posicion)

//Creamos un nuevo array 
let vegetales = ['Repollo','Rábano','Lechuga','Zanahoria']
console.log(vegetales)

let posicion = 0, 
    numElementos = 3
    
let elementosEliminados = vegetales.splice( posicion,numElementos )

/* con .splice( posición,NumElementos ) 
    parametro posición  => indica el valor de donde empezara a eleminar los elementos del array
    parametro numElemento => borra la cantidad de elementos del array 
*/
console.log(vegetales)

//con .slice() => Copiamos cualquier array y los almacenamos en una nueva variable
let arrayCopiado = vegetales.slice()
console.log(arrayCopiado)
console.log(elementosEliminados)

let cadenas = ['Esta es la posición cero ','Esta es la posición uno', 'Esta es la ultima posición']
console.log(cadenas[0])
console.log(cadenas[1])
console.log(cadenas[2])

cadenas.push('Esta es la posición nueva y ultima')
console.log(cadenas[cadenas.length -1])











