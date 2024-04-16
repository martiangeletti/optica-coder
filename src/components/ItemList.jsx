import React from 'react';
import Item from './Item';

const ItemList = ({ productos, nombre }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">{nombre}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};


export default ItemList;

