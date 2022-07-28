var maquina = Math.floor(Math.random() * 3  +1);
var prompt = require("prompt");
prompt.start();
console.log("Es tu turno! \n");
console.log("Piedra[1] \n Papel[2] \n Tijera[3]")
prompt.get(["seleccion"], function(err, res){

    if (res.seleccion > 3 || res.seleccion < 1){
        console.log("Opcion incorrecta vuelta a ingresar un valor entero entre 1 y 3");   
    } else if (isNaN(res.seleccion) == true){
        console.log("Opcion incorrecta por favor ingrese un valor entero entre 1 y 3")
    } else   {
        if (res.seleccion == '1' ){
            switch(maquina) {
                case 1:
                    console.log("Empate!, la maquina eligio piedra");
                break;
                case 2:
                    console.log("Perdiste!, la maquina eligio papel");
                break;
                case 3:
                    console.log("Ganaste!, la maquina eligio tijera");
            } 
        } else if (res.seleccion == 2){
            switch(maquina) {
                case 1:
                    console.log("Ganaste!, la maquina eligio piedra");
                break;
                case 2:
                    console.log("Emapte!, la maquina eligio papel");
                break;
                case 3:
                    console.log("Perdiste!, la maquina eligio tijera");
            } 
        } else if (res.seleccion == 3) {
            switch(maquina) {
                case 1:
                    console.log("Perdiste!, la maquina eligio piedra");
                break;
                case 2:
                    console.log("Ganaste!, la maquina eligio papel");
                break;
                case 3:
                    console.log("Empate!, la maquina eligio tijera");
            }
        }
    }
})
return 0;
