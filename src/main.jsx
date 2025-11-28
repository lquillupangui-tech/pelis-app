import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router/dom";
import {createBrowserRouter} from "react-router";
import {Listado} from "./componets/listado.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Listado,
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
