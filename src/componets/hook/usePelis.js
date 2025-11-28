import {useEffect, useState} from "react";

 export function usePelis() {
     const [peliculas, setPeliculas] = useState([]);
     const traerPeliculas = async () => {
         try {
             const description = await fetch('https://imdb.iamidiotareyoutoo.com/search?q=Spiderman');
             const data = await description.json()
             setPeliculas(data.description)
         } catch (err) {
             console.error(err);
         }
     }
     useEffect(() => {
             traerPeliculas();
         }, []);
     return [peliculas]
 }