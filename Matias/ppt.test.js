const ppt = require('./ppt');

test('adds 1',() => {
    expect(ppt(1)).toBe("Ganaste!")
});

test('adds 6',() => {
    expect(ppt(6)).toBe("opcion incorrecta")
});