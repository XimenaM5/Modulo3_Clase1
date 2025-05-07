// Programa para procesar un déposito o abono en una cuenta, ingresando los valores desde el teclado 
// Utilizando const y let

// Datos de entrada
const nomCliente = prompt("Ingrese su nombre: ");
const numCuenta = prompt("Ingrese su número de cuenta: ");
const saldoCuenta = prompt("Ingrese el saldo de su cuenta: ");
const montoDeposito = prompt("Ingrese el monto de deposito: ");

// Proceso a realizar
console.log(typeof saldoCuenta);
console.log(typeof montoDeposito);
// Los  miembros de la ecuación los transformamos  Number, parseInt, parseFloat
let nuevoSaldo = (parseFloat(saldoCuenta) + parseFloat(montoDeposito));

// Hay que calcular un interés adicional del 1% del monto del deposito y sumarlo al nuevo saldo
nuevoSaldo = nuevoSaldo + (.01*montoDeposito)

// Impresión de resultados
console.log("Nombre del cliente; ", nomCliente)
console.log("Saldo actual: ", saldoCuenta)
console.log("Monto del deposito: ", montoDeposito)
console.log("El nuevo saldo es: ", nuevoSaldo)

alert("Nombre del cliente: "+nomCliente)
alert("Saldo actual: "+saldoCuenta)
alert("Monto del deposito: "+montoDeposito)
alert("Nuevo saldo: "+nuevoSaldo)