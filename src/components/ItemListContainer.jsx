import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'categorias'));
        const fetchedCategories = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCategories(fetchedCategories);
        setLoadingCategories(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoadingProducts(true);
        const db = getFirestore();
        const q = query(collection(db, 'productos'), where('categoria', '==', parseInt(id)));
        const querySnapshot = await getDocs(q);
        const fetchedProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(fetchedProducts);
        setLoadingProducts(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoadingProducts(false);
      }
    };

    if (id) {
      fetchProducts();
    }
  }, [id]);

  if (loadingCategories || loadingProducts) return <h1>Cargando...</h1>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 p-2">Categorías</h1>
      <div className="grid grid-cols-2 gap-4 p-6">
        {categories.map(categoria => (
          <Link key={categoria.id} to={`/category/${categoria.id}`}>
            <div className={`p-4 rounded shadow-md hover:bg-pink-500 ${parseInt(id) === categoria.id ? 'bg-pink-500 text-black' : 'bg-pink-300'}`}>
              <h2 className="text-lg font-semibold text-center">{categoria.nombre}</h2>
            </div>
          </Link>
        ))}
      </div>
      {products.length > 0 ? (
        <>
          <h2 className="grid grid-cols-2 text-2xl font-bold mt-8 p-2">Productos de la categoría</h2>
          <div className="inline-grid grid-cols-2 gap-2 mt-4 p-6">
            {products.map(producto => (
              <Link key={producto.id} to={`/item/${producto.id}`}>
                <div className="bg-pink-200 p-4 rounded shadow-lg hover:bg-pink-400">
                  <h3 className="text-lg font-semibold">{producto.nombre}</h3>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <h2 className="text-2xl font-bold mt-8 p-2">No hay productos disponibles en esta categoría</h2>
      )}
    </div>
  );
}

export default ItemListContainer;
