// Programa para ejecutar, que tendracomo datos de entrada nombre del empleado, sueldo actual, cargo, deducciones y bonos
// El programa debe calcular el monto definitivo 

//Datos de entrada utilizando const
let nomEmplado = "Sebastian Rendon";
let sueldoActual = 4000;
let cargo = "Director Creativo";
let deducciones = 1000;
let bonos = 800;

//Proceso a realizar
var montoDefinitivo = (sueldoActual - deducciones)+bonos;

//Imprimir la salida
console.log("Nombre del Empleado: ", nomEmplado);
console.log("Sueldo actual: ", sueldoActual);
console.log("Cargo: ", cargo);
console.log("Deducciones: ", deducciones);
console.log("Bonificaciones: ", bonos)
console.log("Monto definido a recibir: ", montoDefinitivo);
