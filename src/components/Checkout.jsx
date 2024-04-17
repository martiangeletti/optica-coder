import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import Form from './Form';
import { useForm } from 'react-hook-form'; 
import { getFirestore } from 'firebase/firestore';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState('');
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const db = getFirestore();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: totalPrice(), 
        };
    
        const pedidosRef = collection(db, 'pedidos');
    
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                clearCart();
            })
            .catch((error) => {
                console.error("Error al agregar el pedido:", error);
            });
    };
    
    
    if (pedidoId) {
        return (
            <div className="container mx-auto my-10 text-center">
                <h1 className="text-3xl font-semibold">¡Gracias por tu compra!</h1>
                <p className="text-lg">Tu número de pedido es: {pedidoId}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-3xl font-semibold mb-6">Finalizar compra</h1>
            <Form onSubmit={handleSubmit(comprar)} register={register} />
        </div>
    );
};

export default Checkout;
