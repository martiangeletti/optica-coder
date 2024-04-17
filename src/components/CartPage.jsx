import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, clearCart, addItem } = useContext(CartContext);

    const totalQuantity = (productId) => {
      let total = 0;
      for (const item of cart) {
          if (item.item.id === productId) {
              total += item.quantity;
          }
      }
      return total;
  };

    const totalPrice = cart.reduce((total, prod) => total + (prod.item.price * prod.quantity), 0);


    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-6">Carrito</h1>

            {cart.length > 0 ? (
                <>
                    {cart.map((prod) => (
                        <CartItem key={prod.item.id} producto={prod.item} cantidad={totalQuantity(prod.item.id)} />
                    ))}
                    <h2 className="text-xl font-semibold mt-6">Precio total: ${totalPrice}</h2>
                    <button 
                        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                        onClick={handleClearCart}
                    >
                        Vaciar Carrito
                    </button>
                    <Link 
                        to="/checkout" 
                        className="block text-center mt-4 text-blue-500 hover:underline"
                    >
                        Finalizar compra
                    </Link>
                </>
            ) : (
                <div className="text-center">
                    <h2 className="text-xl font-semibold">El carrito está vacío </h2>
                    <p className="text-gray-600 mt-4">Agrega algunos productos para comenzar tu compra.</p>
                </div>
            )}
        </div>
    );
};

export default CartPage;
