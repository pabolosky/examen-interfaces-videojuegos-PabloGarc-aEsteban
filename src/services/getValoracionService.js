import { valoraciones } from "../../public/data/info.js";

export function getValoracion(id){

    let promesa = new Promise((resolve, reject) =>{

        setTimeout(()=>{
            let valoracion = valoraciones.find( v => v.id === id) ?.puntuacion

            if(valoracion){
                resolve(valoracion)
            }else{
                reject(`Valoracion con id ${id} no existe`)
            }
        }, 900)
    })
    return promesa
}