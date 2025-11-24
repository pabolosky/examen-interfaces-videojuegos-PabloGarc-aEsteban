import { juegos } from "../../public/data/info.js";

export function getJuego(id){

    let promesa = new Promise((resolve, reject) =>{

        setTimeout(()=>{
            let juego = juegos.find( j => j.id === id) ?.titulo

            if(juego){
                resolve(juego)
            }else{
                reject(`Juego con id ${id} no existe`)
            }
        }, 800)
    })
    return promesa
}