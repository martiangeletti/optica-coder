import React from 'react';

const CartItem = ({ producto }) => {
    const { id, nombre, precio, cantidad } = producto;

    return (
        <div className="border p-4 mb-4">
            <h3 className="text-lg font-semibold">{nombre}</h3>
            <p className="text-gray-700">ID: {id}</p>
            <p className="text-gray-700">Precio unitario: ${precio}</p>
            <p className="text-gray-700">Cantidad: {cantidad}</p>
            <button className="bg-red-500 text-white px-3 py-1 rounded mt-2">Eliminar</button>
        </div>
    );
}

export default CartItem;

