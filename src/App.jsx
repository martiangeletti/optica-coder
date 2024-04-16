import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartContext, CartProvider } from './context/CartContext';
import CartPage  from './components/CartPage';
import Checkout from './components/Checkout';




function App() {

  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
          />
          <Routes>
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path='/items' element={<ItemDetailContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/" exact element={<ItemListContainer />} />
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

export default App