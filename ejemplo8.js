// Programa para ejecutar, que tendracomo datos de entrada nombre del empleado, sueldo actual, cargo
// Deducciones seguro social 4% del sueldo, seguro de cesantia 1% del sueldo
// Asigancionesbono de transporte $5000, bono úinico 0.5% del sueldo
// El programa debe calcular el monto definitivo de deducciones, asignaciones y monto final a pagar

//Datos de entrada utilizando let
const nomEmplado = "Sebastian Rendon";
const sueldoActual = 100000;
const cargo = "Director Creativo";
let deducciones;
let bonos;
let montoDefinitivo; 

//Proceso a realizar
deducciones =(.04*sueldoActual)+.01*sueldoActual
bonos = 50000(.005*sueldoActual)
montoDefinitivo = (sueldoActual-deducciones)+bonos;

//Imprimir la salida
console.log("Nombre del Empleado: ", nomEmplado);
console.log("Sueldo actual: ", sueldoActual);
console.log("Cargo: ", cargo);
console.log("Deducciones: ", deducciones);
console.log("Bonificaciones: ", bonos)
console.log("Monto definido a recibir: ", montoDefinitivo);
