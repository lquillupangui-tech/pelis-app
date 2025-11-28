import {Link} from "react-router";
import {usePelis} from "./hook/usePelis.js";
export function Listado() {
    const [listado] = usePelis();

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold text-center mb-8">
                Listado de Películas
            </h1>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {listado.map((item) => (
                    <li
                        key={item["#TITLE"]}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-all cursor-pointer"
                    >
                        <img
                            src={item["#IMG_POSTER"]}
                            alt={item["#TITLE"]}
                            className="w-full h-72 object-cover"
                        />

                        <div className="p-4">
                            <p className="text-center text-lg font-semibold">
                                {item["#TITLE"]}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
