// Esta funcion lo que hace es pedirle un numero aleatorio a la computadora, el cual
// al sacarle los numeros decimales con la funcion floor, queda entero. No obstante la
// funcion random lo que hace es buscar una funcion donde el numero aleatorio va a ser del
// 0 inclusive al 1 no inclusive, por eso la ecuacion matematica.
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// funcion para ahorrar codigo
function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra 🥌"
    } else if(jugada == 2) {
        resultado = "Papel📰"
    } else if(jugada == 3) {
        resultado = "Tijera ✂"
    } else {
        resultado = "MAL ELEGIDO"
    }
    return resultado
}
// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0, min = 1, max = 3, pc = 0, triunfos = 0, perdidas = 0
while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1, 3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel o 3 para tijera")
    alert("Tu eliges " + eleccion(jugador))
    alert("PC elige: " + eleccion(pc))
    // COMBATE
    if (pc == jugador) {
        alert("EMPATE")
    }
    else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2) {
        alert("GANASTE")
        triunfos = triunfos + 1
    }
    else{
        alert("PERDISTE")
        perdidas = perdidas + 1
    }
}
alert("Ganaste: " + triunfos + " veces, y perdistes: " + perdidas + " veces" )