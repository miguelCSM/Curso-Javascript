document.write("<h1>Callbacks</h1>")
/* Un función puede recibir parametros de distintos tipos, arreglos, objetos,etc, tambien 
puede recibir funciones con parametros, así mismo procesos asincronos"
*/

function calcular(datoA,datoB, sumarCB){
    
    var suma = datoA+datoB;

    sumarCB(suma);

}

calcular(2,3,function(){
    console.log("suma: ")
})

/* Realizar un mapa mental del funcionamiento de un callback y colocar un ejemplo ilustrativo 
Entrega de forma individual */