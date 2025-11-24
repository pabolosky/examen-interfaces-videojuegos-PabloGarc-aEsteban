import { juegos } from "../../public/data/info.js";

export function getJuego(id){

    let promesa = new Promise((resolve, reject) =>{

        setTimeout(()=>{
            let tit = juegos.find( j => j.id === id) ?.titulo
            let plat = juegos.find( j => j.id === id) ?.plataforma

            let juego = [tit, plat]

            if(tit){
                resolve(juego)
            }else{
                reject(`Juego con id ${id} no existe`)
            }
        }, 800)
    })
    return promesa
}