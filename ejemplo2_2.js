// Programa para calcular el área de un triángulo, ingresando los valores desde el teclado
// Vamos a ver la implementación de un condicional simple
//El programa debe mostrar un mensaje de "area grande", solo si el area es mayor a 10
// En caso contrario mostrar un mensaje de "area chica"

// Declaración de las variables de entrada
const base = prompt("ingresar valor de base: ");
const altura = prompt("ingresar valor de altura: ");

// Proceso a realizar
const area = (base * altura)/2; 

// aplicaremos aqui el condicional solicitsdo
if (area>=10) {
    alert("El area del triangulo es grande")
} else {
    alert("El area del triangulo es chica")
}
// Imprimir la salida o resultado solicitado
console.log ("El área del triángulo es: ", area)

// Generar una salida por pantalla
alert("El valor del área es: "+area )