import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import Form from './Form'; 

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState('');

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        };
        console.log(pedido);

        const pedidosRef = collection(db, 'pedidos');

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
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
            <Form onSubmit={handleSubmit(comprar)} />
        </div>
    );
};

export default Checkout;