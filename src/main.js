import { getJuego } from "./services/getJuegoService.js";

let salida = document.getElementById("salida")

let br = document.createElement("br")

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
            salida.innerHTML = "Juego encontrado!! "
            salida.innerHTML += "ID: " + id 
            salida.innerHTML += `, Título: ${juego}` 
         //   salida.innerHTML += `, Plataforma: ${juego.plataforma}`
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










