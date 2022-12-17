function iniciarJuego() {
    // variable que llama al elemento con la id(boton-mascotas) de html 
    let botonMascotaJugador = document.getElementById("boton-mascotas")
// Escucha cuando se hace click al elemento que llamamos en la variable botonMascotaJugador anteriormente, y al escuchar esto tiene como segundo parametro una funcion en la cual luego escribiremos lo que queremos que pase luego de que se cumple la accion del "click"
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}
function seleccionarMascotaJugador()
{
    let inputFenixita = document.getElementById("fenixita")
    let inputDelfipower = document.getElementById("delfipower")
    let inputTopotaque = document.getElementById("topotaque")
    let inputOxidianota = document.getElementById("oxidianota")
    let inputTortuninja = document.getElementById("tortuninja")
    let inputDragonburri = document.getElementById("dragonburri")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    if (inputFenixita.checked == true)
    {
        // Modifica el Html desde js manipulando el DOM
        spanMascotaJugador.innerHTML = "Fenixita "
    }
    else if (inputDelfipower.checked == true)
    {
        spanMascotaJugador.innerHTML = "Delfipower "
    }
    else if (inputTopotaque.checked == true)
    {
        spanMascotaJugador.innerHTML = "Topotaque "
    }
    else if (inputOxidianota.checked == true)
    {
        spanMascotaJugador.innerHTML = "Oxidianota "
    }
    else if (inputTortuninja.checked == true)
    {
        spanMascotaJugador.innerHTML = "Tortuninja "
    }
    else if (inputDragonburri.checked == true)
    {
        spanMascotaJugador.innerHTML = "Dragonburri "
    }
    else {
        alert("Selecciona alguna mascota")
    }
    seleccionarMascotaEnemigo() 
}
function seleccionarMascotaEnemigo() {
    let enemigoAleatorio = aleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    if (enemigoAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Fenixita "
    }
    else if (enemigoAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Delfipower "
    }
    else if (enemigoAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = "Topotaque "
    }
    else if (enemigoAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = "Oxidianota "
    }
    else if (enemigoAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = "Tortuninja "
    }
    else if (enemigoAleatorio == 6) {
        spanMascotaEnemigo.innerHTML = "Dragonburri "
    }
}
function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

// llama a la funcion iniciarJuego cuando carga todo el html
window.addEventListener("load", iniciarJuego)
