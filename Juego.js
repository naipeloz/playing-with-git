const Juego = () => {

  let humano = prompt('seleccione una de las siguientes opciones: 1=piedra, 2=papel y 3=tijera');
  humano = parseInt(humano)
  let maquina = Math.floor(Math.random() * (4 - 1) + 1);
  
    if (maquina === 1) {
      maquina = "piedra";
    }
    if (maquina === 2) {
      maquina = "papel";
    }
    if (maquina === 3) {
      maquina = "tijera";
    }

    if (humano === 1) {
      humano = "piedra";
    }
    if (humano === 2) {
      humano = "papel";
    }
    if (humano === 3) {
      humano = "tijera";
    }

    alert ('la maquina ha seleccionado:' + maquina)
    alert ('tu has elegido:' + humano)

    if (
      ( humano == "tijera" && maquina == "piedra") ||
      ( humano == "papel" && maquina == "tijera") ||
      ( humano == "piedra" && maquina == "papel") 
    ) {
      return console.log("la maquina ha ganado");
    }
    if (
      ( humano == "piedra" && maquina == "tijera") ||
      ( humano == "papel" && maquina == "piedra") ||
      ( humano == "tijera" && maquina == "papel")
    ) {
      return console.log("Has ganado! felicitaciones");
    }
    if (humano == maquina) {
        return console.log("es un empate");
      }
  };
  Juego();