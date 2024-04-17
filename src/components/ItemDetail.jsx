import { toast } from "react-toastify";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export const ItemDetail = ({ item }) => {
  const { nombre, imagen, precio, descripcion, stock } = item;
  const { addItem, cartItem, removeItem } = useContext(CartContext);

  const handleAdd = (quantity) => {
    try {
      addItem(item, quantity);
      toast('Producto agregado correctamente');
    } catch (error) {
      console.error("Error al agregar producto:", error);
      toast.error('Error al agregar producto');
    }
  };

  const handleRemove = (quantity) => {
    try {
      removeItem(item.id, quantity);
      toast('Producto eliminado correctamente');
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      toast.error('Error al eliminar producto');
    }
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4 mx-auto my-20">
      <div className="col-span-1 row-span-3 px-6 py-4">
        <div className="font-bold text-xl mb-3">{nombre}</div>
        <div>
          <img src={imagen} alt={nombre} className="w-[250px] h-[250px]" />
        </div>
        {precio && (
          <p className="text-black-700">Precio: ${precio.toFixed(2)}</p>
        )}
        <p className="text-black-700">{stock}</p>
        <p className="text-black-700">{descripcion}</p>
        <ItemCount stock={stock} initial={0} item={item} onAdd={handleAdd} onRemove={handleRemove} />
      </div>
    </div>
  );
}
