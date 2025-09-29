// Ejercicio 6: Convertir minutos a horas y minutos

// Solicitar al usuario el número de minutos
let NumeroMinutos = prompt("Ingrese el número de minutos:");
// Calcular horas y minutos
let horas = Math.floor(NumeroMinutos / 60);
// Calcular el resto de minutos
let resto = NumeroMinutos % 60;
// Mostrar el resultado
alert(horas + " horas y " + resto + " minutos");
console.log(horas + " horas y " + resto + " minutos");
