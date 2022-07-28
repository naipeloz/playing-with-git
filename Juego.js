const Juego = (humano) => {
    let maquina = Math.floor(Math.random() * 3);
    console.log(maquina);
  
    if (maquina == 0) {
      maquina = "piedra";
    }
    if (maquina == 1) {
      maquina = "papel";
    } else {
      maquina = "tijera";
    }
  
    if (
      (humano === "tijera" && maquina === "piedra") ||
      (humano === "papel" && maquina === "tijera") ||
      (humano === "piedra" && maquina === "papel") 
    ) {
      return "pc wins!";
    }
    if (
      (humano === "piedra" && maquina === "tijera") ||
      (humano === "papel" && maquina === "piedra") ||
      (humano === "tijera" && maquina === "papel")
    ) {
      return "human wins!";
    }

    if (humano === maquina) {
        return "empate";
      }


  };
  
  Juego(2);