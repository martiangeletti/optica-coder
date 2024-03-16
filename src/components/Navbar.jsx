import { useState } from "react";
import CartWidget from "./CartWidget";
import logo from "../img/logo-optica.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [showCategories, setShowCategories] = useState(false);

    return (<nav className="bg-pink-300 py-4">
        <div className="container mx-auto flex justify-between items-center">            
            <div className="mr-6 ml-6">
                <h1 className="text-xl ml-2 font-bold">Enigma Optica</h1>
            </div>
            <div className="flex items-center justify-center flex-grow">
                <a href="index.html"><img src={logo} alt="logo-optica" className="h-12 md:h-16 lg:h-20 mr-6" /></a>
                <form className="bg-white p-2 h-[30%] w-full rounded-lg">
                    <input type="text" />
                </form>
            </div>
            <div className="ml-20 flex items-center justify-end">
                <ul className="flex space-x-4 justify-end">
                    <li>
                        <button className="text-white hover:underline text-xl">
                            <Link to="/">Inicio</Link>
                        </button>
                    </li>
                    <li>
                        <button className="text-white hover:underline text-xl" href="" onClick={() => setShowCategories(!showCategories)}>Categorias</button>
                        {showCategories && (
                            <ul className="absolute bg-white text-xl w-[15%]">
                                <li>
                                    <button className="hover:underline">
                                        <Link to="/category/1">Lentes de sol</Link>
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:underline">
                                        <Link to="/category/2">Lentes de lectura</Link>
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:underline">
                                        <Link to="/category/3">Lentes deportivos</Link>
                                    </button>
                                </li>
                            </ul>)}
                    </li>
                    <li>
                        <button className="text-white hover:underline text-xl">
                            Productos
                        </button>
                    </li>
                    <li>
                        <button className="text-white hover:underline text-xl">
                            Contacto
                        </button>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
}

export default Navbar