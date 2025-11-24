import { getValoracion } from "./services/getValoracionService.js";
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

function mostrarJuegoYValoracion(id){
    
    Promise.all([getJuego(id), getValoracion(id)])
    .then(([juego, valoracion]) => {
       console.log(juego, "Juego")
       console.log(valoracion, "Valoración")

        salida.textContent = `Juego y Valoración: ${juego[0]} (${juego[1]}), Puntuación: ${valoracion}/10`
    })
    .catch((err) =>{
        console.log(err, "err")
        salida.textContent = err
    })
    
}

document.getElementById("btn-id-valoracion").addEventListener("click", () =>{

    try{
        let id = getIdFromButton()
        mostrarJuegoYValoracion(id)
    } catch (error){
        salida.textContent = error.message
    }

})