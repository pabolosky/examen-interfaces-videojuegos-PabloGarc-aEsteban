import { juegos } from "../../public/data/info.js"



export function getJuegosPorPlataforma(plataforma){

    let promesa = new Promise((resolve) =>{
        setTimeout(()=>{
            let juegosL = juegos.filter( j => j.plataforma === plataforma)
            let vacio = []

            if(juegosL.length > 0 ){
                resolve(juegosL)
            }else{
                resolve(vacio)
            }
        }, 1000)
    })

    return promesa
}