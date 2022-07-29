const { jueguito, inputPC } = require("./jowi");

test("probando jueguito", () => {
  expect(jueguito(1)).toBe("pc wins!" || "empate" || "human wins!");
});
