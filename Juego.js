const Juego = () => {

  let humano = prompt('seleccione una de las siguientes opciones: 1=piedra, 2=papel y 3=tijera');
  humano = parseInt(humano)
  console.log(humano)
  let maquina = Math.floor(Math.random() * (4 - 1) + 1);
  console.log(maquina)
  let maquinaSelect = "";
  let humanoSelect = "";
  
    if (maquina === 1) {
      maquinaSelect = "piedra";
    }
    if (maquina === 2) {
      maquinaSelect = "papel";
    }
    if (maquina === 3) {
      maquinaSelect = "tijera";
    }

    if (humano === 1) {
      humanoSelect = "piedra";
    }
    if (humano === 2) {
      humanoSelect = "papel";
    }
    if (humano === 3) {
      humanoSelect = "tijera";
    }

    alert ('la maquina ha seleccionado: ' + maquinaSelect)
    alert ('tu has elegido: ' + humanoSelect)

    if (
      ( humano == 3 && maquina == 1) ||
      ( humano == 2 && maquina == 3) ||
      ( humano == 1 && maquina == 2) 
    ) {
      return console.log("la maquina ha ganado");
    }
    if (
      ( humano == 1 && maquina == 3) ||
      ( humano == 2 && maquina == 1) ||
      ( humano == 3 && maquina == 2)
    ) {
      return console.log("Has ganado! felicitaciones");
    }
    if (humano == maquina) {
        return console.log("es un empate");
      }
  };
  Juego();