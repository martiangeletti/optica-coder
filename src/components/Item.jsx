import React from 'react';

const Item = ({ item }) => {
    return (
        <div>
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
            <p>${item.precio}</p>
            <img src={imagen} alt={item.title} />
        </div>
    );
}

export default Item;