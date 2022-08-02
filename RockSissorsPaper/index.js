const juego = () => {   
    var maquina = Math.floor(Math.random() * 3  +1);        //random entre 1 y 3
    var resultado;
    var prompt = require("prompt");
    prompt.start();
    console.log("Es tu turno! \n");
    console.log(" Piedra [1] \n Papel  [2] \n Tijera [3]")
    prompt.get(["seleccion"], function(err, res){
        if (res.seleccion > 3 || res.seleccion < 1){
            console.log("Opcion incorrecta vuelta a ingresar un valor entero entre 1 y 3");   
        } else if (isNaN(res.seleccion) == true){
            resultado ="Opcion incorrecta por favor ingrese un valor entero entre 1 y 3";
           // console.log("Opcion incorrecta por favor ingrese un valor entero entre 1 y 3");
        } else   {
            if (res.seleccion == 1 ){
                switch(maquina) {
                    case 1:
                        resultado = 'Empate!, la maquina eligio piedra';
                        console.log(resultado);
                    break;
                    case 2:
                        resultado = 'Perdiste!, la maquina eligio papel';
                        console.log(resultado);
                    break;
                    case 3:
                        resultado = 'Ganaste!, la maquina eligio tijera';
                        console.log(resultado);
                } 
            } else if (res.seleccion == 2){
                switch(maquina) {
                    case 1:
                        resultado = 'Ganaste!, la maquina eligio piedra';
                        console.log(resultado);
                    break;
                    case 2:
                        resultado = 'Emapte!, la maquina eligio papel';
                        console.log(resultado);
                    break;
                    case 3:
                        resultado = 'Perdiste!, la maquina eligio tijera';
                        console.log(resultado);
                } 
            } else if (res.seleccion == 3) {
                switch(maquina) {
                    case 1:
                        resultado = 'Perdiste!, la maquina eligio piedra';
                        console.log(resultado);
                    break;
                    case 2:
                        resultado = 'Ganaste!, la maquina eligio papel';
                        console.log(resultado);
                    break;
                    case 3:
                        resultado = 'Empate!, la maquina eligio tijera';
                        console.log(resultado);
                }
            }
        }
    })
    return resultado;
}
juego();
module.exports = {
    juego
}

