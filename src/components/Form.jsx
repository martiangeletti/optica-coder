import React from 'react';

const Form = ({ onSubmit, register }) =>  {
    return (
        <form onSubmit={onSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre:</label>
                <input type="text" id="name" {...register("nombre", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo Electrónico:</label>
                <input type="email" id="email" {...register("email", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
                <label htmlFor="celular" className="block text-gray-700 font-bold mb-2">Celular:</label>
                <input type="text" id="phone" {...register("celular", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Finalizar compra</button>
        </form>
    );
}

export default Form;


