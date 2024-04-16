import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
      <div className="flex items-center bg-white shadow-md rounded-lg p-4">
        <img src={producto.imagen} alt={producto.nombre} className="w-32 h-32 object-cover rounded-lg mr-4" />
        <div>
          <h4 className="text-xl font-semibold">{producto.nombre}</h4>
          <p className="text-gray-700">Precio: ${producto.precio}</p>
          <p className="text-gray-700">Categoría: {producto.categoria}</p>
          <Link className="text-blue-500 hover:underline" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
      </div>
    );
  };
  
  export default Item;

