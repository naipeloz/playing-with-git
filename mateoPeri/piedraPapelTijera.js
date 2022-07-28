let jugador = [1, 2, 3]
let options = [1, 2, 3];
let computadora = options[Math.floor(Math.random() * 3)];

switch (true) {
    case (computadora === jugador):
        console.log("Empate");
        break;

    case (computadora === "1" && jugador ==="2"):
        console.log("Gano!");
        break;

    case (computadora === "2" && jugador === "3"):
        console.log("Gano!");
        break;

    case (computadora === "3" && jugador === "1"):
        console.log("Gano!");
        break;

    default:
        console.log("Perdio!");
        break;
}