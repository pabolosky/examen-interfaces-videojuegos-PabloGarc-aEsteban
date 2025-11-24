import { getJuegosPorPlataforma } from "./services/getJuegosPorPlataformaService.js";

let salida = document.getElementById("salida")

function getCatFromButton(){
    let input = prompt("Introduce la plataforma (PC, PlayStation, Xbox o Nintendo Switch)")
    let plat = String(input)

    return plat
}


async function mostrarJuegosPorPlataforma(plat){
    try{
        let juegos = await getJuegosPorPlataforma(plat)
        console.log(juegos, "Juegos")

        salida.textContent = `Juegos encontrados para la plataforma "${plat}": `
        salida.textContent += juegos.map(j => `-[${j.id}] ${j.titulo} (${j.plataforma})`).join(", ")
         
    }catch(error){
        console.log("Error:", error.message)
    }finally{
        console.log("Final")
    }
}   

document.getElementById("btn-plataforma").addEventListener("click", () =>{

    try{
        let plat = getCatFromButton()
        mostrarJuegosPorPlataforma(plat)
    } catch (error){
        salida.textContent = error.message
    }

})
