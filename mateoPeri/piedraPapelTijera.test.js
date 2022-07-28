const piedraPapelTijera = require('./piedraPapelTijera');

describe('Pruebas juego', () => {
    test('pruebaspiedraPapelTijera', () => {
      expect(piedraPapelTijera(3,3)).toBe("Empate");
      expect(piedraPapelTijera(1,2)).toBe("Gano!");
      expect(piedraPapelTijera(2,3)).toBe("Gano!");
      expect(piedraPapelTijera(3,1)).toBe("Gano!");
      expect(piedraPapelTijera(2,1)).toBe("Perdio!");
      expect(piedraPapelTijera(3,2)).toBe("Perdio!");
    })})  
    