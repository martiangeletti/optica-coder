import { useEffect, useState } from "react";
import CartWidget from "./CartWidget";
import logo from "../img/logo-optica.jpg"
import { NavLink } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Navbar = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const db = getFirestore();
    
        const getItemsByDoc = collection(db, 'categorias');
        getDocs(getItemsByDoc).then((snapshot) => {
            if (snapshot.size === 0){
                console.log('No results')
            }
            setCategories(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })))
        })
    }, []);
  
    return (
        <nav className="bg-pink-400 py-4">
            <div className="flex ml-8">
                <NavLink to="/" className="text-white font-bold text-xl flex items-center">
                    <h1>Enigma óptica</h1>
                    <img src={logo} alt="logo optica" className="w-20 h-20" />
                </NavLink>
            
                <div className="flex items-center flex-grow mx-32">
                    <form className="bg-white p-2 w-full rounded-lg">
                        <input type="text" className="w-full" />
                    </form>
                </div>
                
                <div className="ml-20 flex items-center justify-end">
                    <ul className="flex space-x-4 justify-end mr-10">
                        <li><NavLink to={'/'} className="text-white text-xl">Inicio</NavLink></li>
                        <li>
                            <button className="text-white text-xl" onClick={() => setShowCategories(!showCategories)}>Categorías</button>
                            {showCategories && (
                                <div className="flex flex-col absolute bg-white text-xl mt-2 p-2 rounded-lg">
                                    {categories.length > 0 && categories.map((cat)=> (
                                        <NavLink key={cat.id} to={`/category/${cat.id}`} className="text-black-500 hover:underline">{cat.nombre}</NavLink>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li><NavLink to={'/items'} className="text-white text-xl">Productos</NavLink></li>
                        <li><NavLink className="text-white text-xl">Contacto</NavLink></li>
                        <li><NavLink to='/cart'><CartWidget /></NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
