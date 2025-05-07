// Programa para procesar un déposito o abono en una cuenta, ingresando los valores desde el teclado 
// Utilizando const y let
// El programa debe agregar un mensaje "monto nivel oro", si el deposito es mayor a 50000
// en caso contrario el mensaje será "Monto nivel bronze"
// hay un bono especial si el nombre del cliente es Javier, el bono será un 5% de incremento del deposito
// imprimir el monto del bono en los datos de salida
// similar al anterior pero el bono aplicará por el número de cuenta si es = 123456

// Datos de entrada
const nomCliente = prompt("Ingrese su nombre: ");
const numCuenta = prompt("Ingrese su número de cuenta: ");
const saldoCuenta = prompt("Ingrese el saldo de su cuenta: ");
const montoDeposito = prompt("Ingrese el monto de deposito: ");
let bono = 0;

// Proceso a realizar
console.log(typeof saldoCuenta);
console.log(typeof numCuenta);
console.log(typeof montoDeposito);
// Los  miembros de la ecuación los transformamos  Number, parseInt, parseFloat
let nuevoSaldo = (parseFloat(saldoCuenta) + parseFloat(montoDeposito));

// Hay que calcular un interés adicional del 1% del monto del deposito y sumarlo al nuevo saldo
nuevoSaldo = nuevoSaldo + (.01*montoDeposito)

// aqui aplicaremos el condicional
if (montoDeposito>50000) {
    alert("Felicitaciones su deposito es de nivel oro")
} else {
    alert ("Felicitaciones su deposito es de nivel bronce")
}

/* if (nomCliente=="Javier"||nomCliente=="javier") {
    console.log ("Entro al if")
    bono = (montoDeposito*.05)
} */
    if (numCuenta===123456) {
        console.log ("Entro al if")
        bono = (montoDeposito*.05)
    }

// Impresión de resultados
console.log("Nombre del cliente; ", nomCliente)
console.log("Saldo actual: ", saldoCuenta)
console.log("Monto del deposito: ", montoDeposito)
console.log("El nuevo saldo es: ", nuevoSaldo)
console.log ("Monto del bono: ", bono)

alert("Nombre del cliente: "+nomCliente)
alert("Saldo actual: "+saldoCuenta)
alert("Monto del deposito: "+montoDeposito)
alert("Nuevo saldo: "+nuevoSaldo)
alert("Monto del bono: " + bono)