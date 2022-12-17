function iniciarJuego() {
    // variable que llama al elemento con la id(boton-mascotas) de html 
    let botonMascotaJugador = document.getElementById("boton-mascotas")
// Escucha cuando se hace click al elemento que llamamos en la variable botonMascotaJugador anteriormente, y al escuchar esto tiene como segundo parametro una funcion en la cual luego escribiremos lo que queremos que pase luego de que se cumple la accion del "click"
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}
function seleccionarMascotaJugador() {
    let inputFenixita = document.getElementById("fenixita")
    let inputDelfipower = document.getElementById("delfipower")
    let inputTopotaque = document.getElementById("topotaque")
    let inputOxidianota = document.getElementById("oxidianota")
    let inputTortuninja = document.getElementById("tortuninja")
    let inputDragonburri = document.getElementById("dragonburri")
    if (inputFenixita.checked == true)
    {
        alert("Seleccionaste a Fenixita")
    }
    else if (inputDelfipower.checked == true)
    {
        alert("Seleccionaste a Delfipower")
    }
    else if (inputTopotaque.checked == true)
    {
        alert("Seleccionaste a Topotaque")
    }
    else if (inputOxidianota.checked == true)
    {
        alert("Seleccionaste a Oxidianota")
    }
    else if (inputTortuninja.checked == true)
    {
        alert("Seleccionaste a Tortuninja")
    }
    else if (inputDragonburri.checked == true)
    {
        alert("Seleccionaste a Dragonburri")
    }
    else {
        alert("Selecciona alguna mascota")
    }
}
// llama a la funcion iniciarJuego cuando carga todo el html
window.addEventListener("load", iniciarJuego)
