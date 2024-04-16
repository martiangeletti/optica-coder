import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    if (id) {
      const getProductsByCat = query(collection(db, 'productos'), where('id', '==', parseInt(id)));

      getDocs(getProductsByCat).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log('No hay categorias');
        } else {
          const doc = snapshot.docs[0];
          setProduct({ id: doc.id, ...doc.data() });
        }
        setLoading(false);
      }).catch(error => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
    } else {
      const getProducts = collection(db, 'productos');
      getDocs(getProducts).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log('No hay productos');
        } else {
          const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setProduct(productsData);
        }
        setLoading(false);
      }).catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return <h1 className={`text-black ${loading ? "text-lg mx-auto" : ""}`}>Cargando</h1>;

  return (
    <div>
      {product && <ItemDetail item={product} />}
    </div>
  );
};

export default ItemDetailContainer;
