const NumeroMes = (mes) => {
    const mes30Dias = [4, 6, 9, 11];
    const mes31Dias = [1,3,5,7,8,10,12,];
    
    if (mes30Dias.includes(mes)) {
      return 30;
    }
    if (mes31Dias.includes(mes)) {
      return 31;
    } else {
      return 28;
    }
  };