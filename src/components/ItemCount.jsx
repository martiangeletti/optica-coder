import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd, item }) => {
  const [count, setCount] = useState(initial);

  const handleCountChange = (value) => {
    const newCount = count + value;
    if (newCount >= 1 && newCount <= stock) {
      setCount(newCount);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => handleCountChange(-1)}
        className="bg-gray-200 px-3 py-1 rounded-l"
      >
        -
      </button>
      <input
        type="text"
        value={count}
        readOnly
        className="w-10 text-center bg-gray-100"
      />
      <button
        onClick={() => handleCountChange(1)}
        className="bg-gray-200 px-3 py-1 rounded-r"
      >
        +
      </button>
      <button
        onClick={handleAddToCart}
        className="ml-4 bg-pink-500 text-white px-4 py-1 rounded"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
