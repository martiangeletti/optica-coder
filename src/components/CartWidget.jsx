import React, { useContext } from 'react'
import cartImage from '../assets/cart.svg'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { cart } = useContext(CartContext)

    const totalProducts = cart.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <div>
            <img src={cartImage} alt="cart" className="w-6 h-6"/>
            {totalProducts}
        </div>
    )
}

export default CartWidget;
