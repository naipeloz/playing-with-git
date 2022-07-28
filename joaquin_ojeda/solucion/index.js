var maquina = Math.floor(Math.random() * 3  +1);
var prompt = require("prompt");
prompt.start();
console.log("tu turno! \n");
console.log("piedra 『1』 \n papel 『2』 \n tijeras 『3』")
prompt.get(["seleccion"], function(err, res){
    if (res.seleccion == '1' ){
        switch(maquina) {
            case 1:
                console.log("Empate!, maquina eligio piedra");
            break;
            case 2:
                console.log("Perdiste!, maquina eligio papel");
            break;
            case 3:
                console.log("Ganaste!, maquina eligio tijera");
        } 
    } else if (res.seleccion == 2){
        switch(maquina) {
            case 1:
                console.log("Ganaste!, maquina eligio piedra");
            break;
            case 2:
                console.log("Emapte!, maquina eligio papel");
            break;
            case 3:
                console.log("Perdiste!, maquina eligio tijera");
        } 
    } else if (res.seleccion == 3) {
        switch(maquina) {
            case 1:
                console.log("Perdiste!, maquina eligio piedra");
            break;
            case 2:
                console.log("Ganaste!, maquina eligio papel");
            break;
            case 3:
                console.log("Empate!, maquina eligio tijeras");
        }
    }
})
return 0;