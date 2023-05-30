/* 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
responder: “No te creo”
 */

/* let respuestaEjercicio1 = prompt("Eres bellisimo/a?");

if (respuestaEjercicio1 === "si") {
    console.log("Ciertamente");
   
} else if (respuestaEjercicio1==="no"){
    console.log("No te creo");
} else {
    console.log("Eso que esrcibiste no lo entiendo");
} */

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


/* 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no.
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x
númmero no es divisible entre 2" */

/* // Solicitar al usuario un número
let numero = parseInt(prompt("Ingrese un número:"));

// Verificar si el número es divisible entre 2
if (numero % 2 === 0) {
  console.log(numero + " es divisible entre 2");
} else {
  console.log(numero + " no es divisible entre 2");
  
} */

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/* 3. Crear un programa que determine si un número introducido en un Prompt
es par o no, la respuesta será mostrada en un Alert. */

/* let numero = parseInt(prompt("Ingrese un número:"));

// Verificar si el número es par
if (numero % 2 === 0) {
  alert(numero + " es un número par");
} else {
  alert(numero + " no es un número par");
}
 */

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/* 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
"Ganaste un premio", en caso contrario mostrar el número y el mensaje
“Lo sentimos, sigue participando”.
 */

/* 
// Solicitar al usuario un número de cliente
let numeroCliente = parseInt(prompt("Ingrese su número de cliente:"));

// Verificar si el número de cliente es igual a 1000
if (numeroCliente === 1000) {
  console.log("¡Ganaste un premio!");
} else {
  console.log("Lo sentimos, sigue participando. Tu número de cliente es: " + numeroCliente);
}125 */


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/* 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos
menor. No considerar el caso en que ambos números son iguales. */

/* // Solicitar al usuario que ingrese dos números
var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Verificar cuál de los dos números es menor
if (numero1 < numero2) {
  console.log(numero1 + " es menor que " + numero2);
} else {
  console.log(numero2 + " es menor que " + numero1);
} */

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/* 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
el número mayor. Considerar el caso en que 2 números sean iguales.
 */

/* 
// Solicitar al usuario que ingrese tres números
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

// Determinar el número mayor
if (numero1 > numero2 && numero1 > numero3) {
  console.log(numero1 + " es el número mayor.");
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log(numero2 + " es el número mayor.");
} else if (numero3 > numero1 && numero3 > numero2) {
  console.log(numero3 + " es el número mayor.");
} else if (numero1 === numero2 && numero1 === numero3) {
  console.log("Los tres números son iguales.");
} else if (numero1 === numero2 && numero1 > numero3) {
  console.log(numero1 + " y " + numero2 + " son iguales y mayores que " + numero3 + ".");
} else if (numero1 === numero3 && numero1 > numero2) {
  console.log(numero1 + " y " + numero3 + " son iguales y mayores que " + numero2 + ".");
} else if (numero2 === numero3 && numero2 > numero1) {
  console.log(numero2 + " y " + numero3 + " son iguales y mayores que " + numero1 + ".");
} else {
  console.log("Dos números son iguales y mayores que el tercero.");
} */

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/* 7. Requerir al usuario que ingrese un día de la semana e imprimir un
mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje
diferente si es sábado o domingo. Si el día ingresado no es ninguno de
esos, imprimir otro mensaje. */

/* // Solicitar al usuario que ingrese un día de la semana
let diaSemana = prompt("Ingrese un día de la semana:");

// Convertir el día ingresado a minúsculas para hacer la comparación
diaSemana = diaSemana.toLowerCase();

// Verificar el día de la semana ingresado y mostrar el mensaje correspondiente
if (diaSemana === "lunes") {
  console.log("Es lunes, comienza una nueva semana.");
} else if (diaSemana === "viernes") {
  console.log("¡Es viernes, casi llega el fin de semana!");
} else if (diaSemana === "sábado" || diaSemana === "domingo") {
  console.log("Es fin de semana, disfruta tus días libres.");
} else {
  console.log("El día ingresado no es lunes, viernes, sábado ni domingo.");
}
 */

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/* 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe
comprobar que el número efectivamente esté en ese rango, si no lo está
imprima un mensaje de error. Si lo está, imprima “reprobado” si la
calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por
último, “excelente” si es 10. */

/* // Solicitar al usuario una calificación
let calificacion = parseFloat(prompt("Ingrese una calificación (entre 1 y 10):"));

// Verificar que la calificación esté en el rango esperado
if (calificacion >= 1 && calificacion <= 10) {
  // Calificación válida, mostrar el mensaje correspondiente
  if (calificacion < 6) {
    console.log("Reprobado");
  } else if (calificacion >= 6 && calificacion <= 8) {
    console.log("Regular");
  } else if (calificacion === 9) {
    console.log("Bien");
  } else if (calificacion === 10) {
    console.log("Excelente");
  }
} else {
  // Calificación fuera de rango, mostrar mensaje de error
  console.log("La calificación ingresada está fuera del rango válido.");
} */

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/* 9. Escribe un programa que responda a un usuario que quiere comprar un
helado en una conocida marca de comida rápida cuánto le costará en
función del topping que elija.
● El helado sin topping cuesta 50 MXN.
● El topping de oreo cuesta 10 MXN.
● El topping de KitKat cuesta 15 MXN.
● El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa
le indicará “no tenemos este topping, lo sentimos.” y a continuación le
informará el precio del helado sin ningún topping. */


/* // Solicitar al usuario que elija un topping
let topping = prompt("Elige un topping para tu helado (oreo, KitKat o brownie):");

// Inicializar el costo del helado sin topping
let costoHelado = 50;

// Verificar el topping elegido y actualizar el costo del helado
if (topping === "oreo") {
  costoHelado += 10;
  console.log("El costo de tu helado con topping de " + topping + " es de " + costoHelado + " MXN.");
} else if (topping === "KitKat") {
  costoHelado += 15;
  console.log("El costo de tu helado con topping de " + topping + " es de " + costoHelado + " MXN.");
} else if (topping === "brownie") {
  costoHelado += 20;
  console.log("El costo de tu helado con topping de " + topping + " es de " + costoHelado + " MXN.");
} else {
  console.log("No tenemos este topping, lo sentimos.");
  console.log("El costo de tu helado sin topping es de " + costoHelado + " MXN.");
} */

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/* 10. Un conocido portal de educación en tecnología está ofreciendo
programas para aprender a desarrollar aplicaciones. Escribe un programa
que le indique a la persona interesada cuánto deberá pagar
mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su
costo mensual:
● Course: $4999 MXN
● Carrera $3999 MXN
● Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el
descuento correspondiente al precio final.
● Beca Facebook: 20% de descuento.
● Beca Google: 15% de descuento.
● Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario
cuánto gastaría en total por el curso elegido, tomando en cuenta las
siguientes duraciones:
● Course: 2 meses
● Carrera 6 meses
● Master: 12 meses */

/* 
// Solicitar al usuario el nivel de programa educativo
let nivel = prompt("Elige el nivel del programa educativo (Course, Carrera o Master):");

// Definir los costos mensuales de cada nivel
let costoMensual;

if (nivel === "Course") {
  costoMensual = 4999;
} else if (nivel === "Carrera") {
  costoMensual = 3999;
} else if (nivel === "Master") {
  costoMensual = 2999;
} else {
  console.log("El nivel ingresado no es válido.");
  costoMensual = 0;
}

// Verificar si el usuario cuenta con alguna beca
let beca = prompt("¿Cuentas con alguna beca? (Facebook, Google o Jesua)");

// Calcular el descuento correspondiente a la beca
let descuento = 0;

if (beca === "Facebook") {
  descuento = 0.2;
} else if (beca === "Google") {
  descuento = 0.15;
} else if (beca === "Jesua") {
  descuento = 0.5;
}

// Calcular el precio mensual con descuento
let precioMensualConDescuento = costoMensual - (costoMensual * descuento);

// Calcular el costo total del programa educativo
let duracion;
let costoTotal;

if (nivel === "Course") {
  duracion = 2;
} else if (nivel === "Carrera") {
  duracion = 6;
} else if (nivel === "Master") {
  duracion = 12;
}
else {
    duracion = 0;
}

costoTotal = precioMensualConDescuento * duracion;

// Mostrar el costo mensual con descuento y el costo total
console.log("El costo mensual con descuento es de $" + precioMensualConDescuento + " MXN.");
console.log("El costo total del programa educativo es de $" + costoTotal + " MXN."); */


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/* 11.Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
distancia recorrida por un vehículo con cargo extra por los litros
consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto”
ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo
total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al
total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros
consumidos */


// Solicitar al usuario el tipo de vehículo
let tipoVehiculo = prompt("Ingresa el tipo de vehículo (coche, moto o autobús):");

// Solicitar al usuario la distancia recorrida en kilómetros
let distanciaRecorrida = parseFloat(prompt("Ingresa la distancia recorrida en kilómetros:"));

// Solicitar al usuario los litros consumidos
let litrosConsumidos = parseFloat(prompt("Ingresa la cantidad de litros consumidos:"));

// Inicializar el precio por kilómetro según el tipo de vehículo
let precioKilometro;

if (tipoVehiculo === "coche") {
  precioKilometro = 0.20;
} else if (tipoVehiculo === "moto") {
  precioKilometro = 0.10;
} else if (tipoVehiculo === "autobús") {
  precioKilometro = 0.5;
} else {
  console.log("El tipo de vehículo ingresado no es válido.");
  precioKilometro = 0;
}

// Calcular el costo total sin considerar los litros consumidos
let costoTotal = precioKilometro * distanciaRecorrida;

// Calcular el cargo extra por litros consumidos
let extraLitros;

if (litrosConsumidos <= 100) {
  extraLitros = 5;
} else {
  extraLitros = 10;
} 

// Calcular el costo total considerando el cargo extra por litros consumidos
costoTotal += extraLitros;

// Mostrar el costo total a pagar
console.log("El total a pagar es de $" + costoTotal.toFixed(2));