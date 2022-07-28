

function piedraPapelTijera (algoritmo, jugador) {
    const numeroAleatorio = (min,max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    console.log("valor: ", numeroAleatorio(1,4));
    
};