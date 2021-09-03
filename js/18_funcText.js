document.write("<h1>Funciones con texto</h1>")

var num = 70;
var bienvenida = "Bienvenidos ";
var participantes = "todos los ingenieros en sistemas";

var cadena = num.toString();
console.log(num)
console.log(cadena)
console.log(bienvenida)
var Mayuscula = bienvenida.toUpperCase();// Convierte a mayuscula el contenido de una cadena String
console.log(Mayuscula)
var minuscula = participantes.toLowerCase(); // Convierte a miniscula el contenido de una cadena String
console.log(minuscula)

// Longitud
console.log(bienvenida.length)

// Concatenar
var textoTotal = bienvenida+participantes;
console.log(textoTotal)

textoTotal = bienvenida.concat(" "+participantes)
console.log(textoTotal);