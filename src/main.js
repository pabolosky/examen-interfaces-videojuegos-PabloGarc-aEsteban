import { getJuego } from "./services/getJuegoService.js";

let salida = document.getElementById("salida")

function getIdFromButton(){
    let input = prompt("Introduce el ID del juego (1-12):")
    let id = Number(input)

    if(Number.isNaN(id)){
        alert("No has introducido un número")
        return
    }
    return id
}

function mostrarJuego(id){
    
        getJuego(id)
        .then((juego) => {
            console.log(juego, "Juego")
            salida.textContent = `Juego Encontrado: Id - ${id}, Título - ${juego[0]}, Plataforma - ${juego[1]}`

        })
        .catch((error) => {
            console.log(error, "error")
            salida.textContent = error
        })
    
}



document.getElementById("btn-id").addEventListener("click", () =>{

    try{
        let id = getIdFromButton()
        mostrarJuego(id)
    } catch (error){
        salida.textContent = error.message
    }

})










