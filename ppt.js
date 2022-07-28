let pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
let user = pregunta.toLowerCase();
let options = ["piedra", "papel", "tijera"];
let machine = options[Math.floor(Math.random() * 3)];

switch (true) {
    case (machine === user):
        alert("Empataron");
        break;

    case (machine === "piedra" && user ==="papel"):
        alert("Ganaste!");
        break;

    case (machine === "papel" && user === "tijera"):
        alert("Ganaste!");
        break;

    case (machine === "tijera" && user === "piedra"):
        alert("Ganaste!");
        break;

    default:
        alert("Perdiste!");
        break;
}