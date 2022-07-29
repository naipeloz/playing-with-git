const jueguito = (input1) => {
  let inputPC = Math.floor(Math.random() * 3);

  //no game, invalid options
  if (input1 < 0 || input1 > 2) {
    return "opción inválida, intente nuevamente";
  }

  //tie
  if (input1 === inputPC) {
    return "empate";
  }

  //pc wins
  if (
    (input1 === 0 && inputPC === 1) ||
    (input1 === 1 && inputPC === 2) ||
    (input1 === 2 && inputPC === 0)
  ) {
    return "pc wins!";
  }

  //human wins
  if (
    (input1 === 0 && inputPC === 2) ||
    (input1 === 1 && inputPC === 0) ||
    (input1 === 2 && inputPC === 1)
  ) {
    return "human wins!";
  }
};

jueguito(1);

module.exports = {
  jueguito,
};
