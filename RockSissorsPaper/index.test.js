const { juego } = require('./index')

describe('mi primer set de pruebas',() => {
    test('probando juego', () => {
        expect(juego()).toBe( 'Ganaste!, la maquina eligio tijera'   || 'Perdiste!, la maquina eligio tijera'|| 'Empate!, la maquina eligio tijera'
                            || 'Empate!, la maquina eligio piedra'  || 'Perdiste!, la maquina eligio piedra'|| 'Ganaste!, la maquina eligio piedra'
                            || 'Perdiste!, la maquina eligio papel' || 'Empate!, la maquina eligio papel'   || 'Ganaste!, la maquina eligio papel'
        )
    })
});