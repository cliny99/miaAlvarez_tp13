Micro desafío 1:
El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir ejecutando cada una de las siguientes consignas para lograr el objetivo:
1. En Visual Studio Code crear la carpeta de trabajo y dentro de ella inicializar un repositorio local y vincularlo con un repositorio remoto cuyo nombre debe tener la siguiente nomenclatura: nombreApellido_tp13
2. Crear un archivo llamado bankBalance.js
3. Crear un array que contenga las operaciones bancarias realizadas por el cliente, tomando en cuenta que los depósitos serán representados por valores positivos y los retiros por valores negativos.
4. Crear la función calculateBalances() que reciba como parámetro el array creado. La función tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo actual de retiros y el saldo actual del cliente.
5. Crear otra función llamada bankBalance() que reciba como parámetros el nombre y el apellido del cliente así como el array que contiene las operaciones bancarias. Esta función tendrá la responsabilidad de retornar el nombre y apellido del cliente y el saldo total de depósitos, el saldo actual de retiros y el saldo actual.
6. Para probar las diferentes respuestas invoca a la función, asigna diferentes valores o argumentos. Usando el console.log(), muestra los resultados al usuario:
“Estimada Gloria Medina:
El monto total de los depósitos es de: $5500.
El monto total de los retiros es de: $15000.
Por lo tanto, su saldo actual en la cuenta es de: $40000.”.

Luego de hacer las pruebas todos los console.log() deben quedar comentados.
La última línea de código debes “exportar” la función. Para ello debes escribir lo siguiente:
module.exports = bankBalance

Micro desafío 2 (opcional NO ENTREGABLE):
Uno de los equipos de desarrollo te pide ayuda para desarrollar un código, donde se pueda visualizar la tabla de multiplicar del 1 al 10. El equipo indica que puedes usar algunos de los ciclos o bucles aprendidos: for - while o do while. Para ayudar al equipo de desarrollo, tu responsabilidad será:
1. En la carpeta ya creada, crea un el archivo createMultiplicationTable.js
2. Crear la función createMultiplicationTable() que no reciba ningún parámetro. Tendrá la responsabilidad de generar de manera automática la tabla de multiplicar del 1 al 10.
3. Lo ideal es que la función muestre al usuario algo así, con cada una de las tablas:

Tabla de multiplicar x1
—---------------------------
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
1 * 4 = 4
1 * 5 = 5
1 * 6 = 6
1 * 7 = 7
1 * 8 = 8
1 * 9 = 9
1 * 10 = 10
—---------------------------

4. La función solo debe ejecutar los console.log() internamente para mostrar las tablas solicitadas

Desafíos (opcionales NO ENTREGABLES):
En la carpeta ya creada, crea un nuevo archivo llamado extra.js. Dentro del mismo;
1. Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.
3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.
4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de las letras de la cadena de texto pero en MAYÚSCULA. Pista: Investigar el método .toUpperCase.
5. Crear una función que reciba como parámetro un array de números positivos. Tendrá la responsabilidad de retornar un nuevo array pero sólo con los valores pares. Pista: Investiga sobre el uso del operador módulo. Recordemos también que un número par es aquel que se puede dividir entre 2. Al final del archivo debes exportar un objeto literal con todas las funciones que hayas creado. En el caso que las hayas creado todas debería quedar así:
module.exports = {
showNumbers,
printEveryThree,
totalSummation,
showToUpperCase,
returnPairs
}