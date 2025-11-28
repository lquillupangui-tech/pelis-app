import {Link} from "react-router";
import {usePelis} from "./hook/usePelis.js";

export function Listado() {
    const [listado] = usePelis();
 return <div>
     <h1 className="text-4xl font-bold text-center"> Listado de Peliculas</h1>
     <ul className="flex flex-wrap gap-8 items-center justify-center">
         {
             listado.map(listado => {
                 return <li className="m-64 hover: scale-105 transition-all" key={listado["#TITLE"]}>
                     <p className="text-center">{listado["#TITLE"]}</p>
                     <img src={listado["#IMG_POSTER"]} alt={listado["#TITLE"]} />
                 </li>

             })
         }
     </ul>
 </div>;
}