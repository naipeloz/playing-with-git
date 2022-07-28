let pregunta = prompt("Ingresa tu opción: 1, 2 o 3 "); 
let user = pregunta.toLowerCase();
let options = ["1", "2", "3"];
let machine = options[Math.floor(Math.random() * 3)];

switch (true) {
    case (machine === user):
        console.log("Empataron");
        break;

    case (machine === "1" && user ==="2"):
        console.log("Ganaste!");
        break;

    case (machine === "2" && user === "3"):
        console.log("Ganaste!");
        break;

    case (machine === "3" && user === "1"):
        console.log("Ganaste!");
        break;

    default:
        console.log("Perdiste!");
        break;
}