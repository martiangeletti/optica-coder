# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Proyecto de E-commerce con React, Tailwind CSS y Firebase

Este proyecto de e-commerce está desarrollado utilizando React.js como biblioteca principal para la interfaz de usuario, Tailwind CSS para estilizar los componentes y Firebase como base de datos en tiempo real para almacenar los productos y gestionar el carrito de compras.

## Configuración del Proyecto

### React + Vite

El proyecto utiliza Vite como herramienta de construcción, lo que proporciona una configuración mínima para React, permitiendo un rápido desarrollo con Hot Module Replacement (HMR) y algunas reglas de ESLint.

Dos plugins oficiales son utilizados:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Utiliza Babel para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Utiliza SWC para Fast Refresh.

## Estructura de Directorios

El proyecto está organizado de la siguiente manera:

- **src/**: Contiene todos los archivos relacionados con el código fuente del proyecto.
  - **components/**: Componentes reutilizables de React.
  - **context/**: Contexto de la aplicación para el manejo del carrito de compras.
  - **img/**: Imágenes utilizadas en el proyecto.
  - **pages/**: Páginas de la aplicación, como el carrito de compras y la página de inicio.
  - **styles/**: Archivos de estilos CSS y configuraciones relacionadas con Tailwind CSS.
  - **App.js**: Componente principal de la aplicación.
  - **index.js**: Punto de entrada de la aplicación.

## Componentes Principales

### Navbar

El componente Navbar muestra la barra de navegación en la parte superior de la página. Contiene enlaces a las diferentes secciones de la tienda, como la página de inicio, productos, carrito de compras y contacto.

### ItemListContainer

Este componente muestra una lista de categorías y los productos asociados a una categoría específica. Utiliza parámetros de la URL para determinar la categoría seleccionada.

### ItemDetailContainer

Muestra los detalles de un producto específico, incluyendo su nombre, imagen, precio y descripción. Permite agregar o eliminar productos del carrito de compras.

### CartPage

Muestra los productos agregados al carrito de compras, junto con su cantidad y precio total. Permite vaciar el carrito y finalizar la compra.

### Checkout

Página donde se completa la compra, proporcionando un formulario para ingresar los detalles del cliente. Una vez completado, se registra el pedido en Firebase y se vacía el carrito.

### CartWidget

Widget que muestra la cantidad total de productos en el carrito. Se encuentra en la barra de navegación y se actualiza dinámicamente.

## Otros Componentes

- **Item**: Muestra los detalles de un producto en una tarjeta, incluyendo su nombre, precio y categoría.
- **ItemDetail**: Muestra los detalles completos de un producto, incluyendo su imagen, nombre, precio, descripción y opciones para agregarlo al carrito.
- **ItemCount**: Permite al usuario seleccionar la cantidad de un producto que desea agregar al carrito.
- **CartItem**: Representa un elemento individual en el carrito de compras, incluyendo su nombre, precio y cantidad.
- **Form**: Componente para el formulario de finalización de compra, donde se ingresan los detalles del cliente.

## Integración con Firebase

El proyecto utiliza Firebase como base de datos en tiempo real para almacenar la información de los productos y los pedidos de los clientes. Los datos se recuperan y actualizan utilizando las bibliotecas de Firestore de Firebase.

## Instalación y Ejecución

1. Clona el repositorio desde GitHub.
2. Instala las dependencias utilizando npm o yarn.
3. Configura las variables de entorno para Firebase en el archivo `.env`.
4. Ejecuta el proyecto utilizando el comando `npm run dev` o `yarn dev`.

## Conclusiones

Este proyecto proporciona una base sólida para desarrollar una aplicación de comercio electrónico utilizando React.js, Tailwind CSS y Firebase. Puede ser extendido y personalizado fácilmente para adaptarse a las necesidades específicas del negocio.