// Programa para procesar un déposito o abono en una cuenta, ingresando los valores desde el teclado

// Datos de entrada
var nomCliente = prompt("Ingrese su nombre: ");
var numCuenta = prompt("Ingrese su número de cuenta: ");
var saldoCuenta = prompt("Ingrese el saldo de su cuenta: ");
var montoDeposito = prompt("Ingrese el monto de deposito: ");

// Proceso a realizar
console.log(typeof saldoCuenta);
console.log(typeof montoDeposito);
// Los  miembros de la ecuación los transformamos  Number, parseInt, parseFloat
var nuevoSaldo = (parseFloat(saldoCuenta) + parseFloat(montoDeposito));

// Impresión de resultados
console.log("Nombre del cliente; ", nomCliente)
console.log("Saldo actual: ", saldoCuenta)
console.log("Monto del deposito: ", montoDeposito)
console.log("El nuevo saldo es: ", nuevoSaldo)

alert("Nombre del cliente: "+nomCliente)
alert("Saldo actual: "+saldoCuenta)
alert("Monto del deposito: "+montoDeposito)
alert("Nuevo saldo: "+nuevoSaldo)