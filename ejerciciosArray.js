//1. Suma de elementos: Escribe una función que sume todos los elementos de un array numérico.
let listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 88, 65, 74, 23]
let suma = 0 

for (let i = 0; i < listaDeNumeros.length; i++){
    suma = suma + listaDeNumeros[i]
}

console.log(suma)

//2. Encontrar el número más grande: Encuentra el número más grande en un array de números.

let arrayDeNumeros = [
  1, 2, 3, 4, 5, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let numeroMasGrande = Math.max(...arrayDeNumeros);

console.log(numeroMasGrande);

//otra forma de hacerlo

let numeroMasGrande2 = arrayDeNumeros[0]; // Suponemos que el primer elemento es el más grande

for (let i = 1; i < arrayDeNumeros.length; i++) {
  if (arrayDeNumeros[i] > numeroMasGrande) {
    numeroMasGrande = arrayDeNumeros[i];
  }
}

console.log("El número más grande es:", numeroMasGrande);

//3.Encontrar elementos pares: Filtra un array de números para obtener solo los números pares.

let numerosPares = [];

for (let i = 0; i < arrayDeNumeros.length; i++) {
  if (arrayDeNumeros[i] % 2 == 0) {
    numerosPares.push(arrayDeNumeros[i]);
  }
}

console.log(numerosPares);

//otra forma de hacerlo:

let numeros = [10, 5, 25, 30, 15];
let numerosPares2 = numeros.filter(function (numero) {
  return numero % 2 === 0;
});

console.log("Números pares:", numerosPares2);

//4. Encontrar elementos únicos: Elimina los elementos duplicados de un array.

let arrayDuplicados = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9];

let arraySinDuplicados = [];

for (let i = 0; i < arrayDuplicados.length; i++) {
  if (!arraySinDuplicados.includes(arrayDuplicados[i])) {
    arraySinDuplicados.push(arrayDuplicados[i]);
  }
}

console.log(arraySinDuplicados);

// otra forma de hacerlo
let arrayDuplicados2 = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 8, 8, 9];

// Crear un conjunto (Set) para eliminar duplicados
let conjuntoSinDuplicados = new Set(arrayDuplicados);

// Convertir el conjunto de nuevo en un array
let arraySinDuplicados2 = [...conjuntoSinDuplicados];

console.log(arraySinDuplicados);

//5. Contar elementos: Cuenta cuántas veces aparece un elemento específico en un array.

let listadoDeNumeros = [1, 1, 1, 2, 3, 4, 4, 5, 6, 7, 7]
let elementoAContar = 1
let cuenta = 0

for (let i = 0; i < listadoDeNumeros.length; i++) {
  if (elementoAContar === listadoDeNumeros[i]) {
    cuenta += 1;
  }
}
console.log(cuenta)


//6. Unir arrays: Combina dos arrays en uno solo sin duplicados.

let firstArray = [1, "hola", 2, "como", 3]
let secondArray=[3, "estas", 4, "tu", 5, "hoy"]

for (let i = 0; i < secondArray.length; i++){
  if (!firstArray.includes(secondArray.indexOf[i])) {
    firstArray.push(secondArray[i])
    }
}
firstArray = new Set(firstArray)
firstArray = [...firstArray]
console.log(firstArray)

// Ordenar elementos: Ordena un array de números en orden ascendente y descendente.

arrayDesordenado = [1, 5, 2, 3, 7, 8, 9, 4, 10, 6]



//Suma de matrices: Realiza la suma de dos matrices representadas como arrays bidimensionales.
// Filtrar por longitud: Filtra un array de cadenas para obtener solo las cadenas que tienen una longitud específica.
// Inversión de elementos: Invierte el orden de los elementos en un array.
//Rotación de elementos: Realiza una rotación hacia la izquierda en un array dado.
//Combinación de arrays: Combina dos arrays ordenados en uno solo manteniendo el orden.
//Encontrar la intersección: Encuentra los elementos comunes entre dos arrays.
//Suma de matrices por columna: Realiza la suma de matrices representadas como arrays bidimensionales por columna.
//Encontrar el elemento de mayor frecuencia: Encuentra el elemento que más se repite en un array.
//Desglose de cadenas: Divide una cadena en un array de palabras.
//Reversión de palabras: Invierte el orden de las palabras en una cadena.
//Eliminar elementos específicos: Elimina todos los elementos de un valor específico de un array.
//Diferencia de conjuntos: Encuentra la diferencia entre dos arrays, es decir, los elementos que están en uno pero no en el otro.
//Operaciones matemáticas en arrays: Realiza operaciones matemáticas (suma, resta, multiplicación, etc.) entre dos arrays numéricos elemento por elemento.






// eliminar un elemento específico de un array
console.log("-----------");

const arr = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
];

arr[2].splice(9, 1);
console.log(arr);
