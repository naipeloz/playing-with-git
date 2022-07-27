const { sumar } = require('./Index')

describe("testlist", () => {
    test("suma", () => {
            expect(sumar(5,4)).toBe(9);
        });
    })


