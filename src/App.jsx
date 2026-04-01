import { useState } from "react"
import Cards from "./Cards"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Join from "./Components/Join"
import Navbar from "./Components/Navbar"
import Pricing from "./Components/Pricing"
import ProductionCard from "./Components/ProductionCard"
import Status from "./Components/Status"
import StepsCards from "./Components/StepsCards"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const getData = async () => {
  const res = await fetch("/public/products.json")
  return res.json()
}

const dataPromise = getData()








function App() {
  const [isProductsActive, setIsProductsActive] = useState('products');
  const [cartItems, setCartItems] = useState([]);
  
const removeFromCart = (id) => {
  const updatedCart = cartItems.filter(item => item.id !== id);
  setCartItems(updatedCart);
};
  

const clearCart = () => {
  setCartItems([]);
   
};

  return (
    <>
      <Navbar cartItems={cartItems} 
  
  setIsProductsActive={setIsProductsActive} />

      <Banner />

      <Status />

      <section className="py-16 bg-gray-50 flex flex-col items-center min-h-[500px]">

            {/* Heading */}
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-3">Premium Digital Tools</h2>
                <p className="text-gray-500">
                    Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.
                </p>
            </div>

            {/* Toggle UI (Static) */}
            <div className="flex bg-white shadow-md rounded-full p-1 mb-5 w-fit border border-gray-100">

                {/* Active Button */}
                <button onClick={() => setIsProductsActive('products')} className={`px-6 py-2 rounded-full font-medium transition-colors ${isProductsActive === "products" ? "bg-violet-600 text-white" : "text-gray-600 hover:bg-gray-100"
              }`}>
                    Products
                </button>

                {/* Inactive Button */}
                <button onClick={() => setIsProductsActive('cart')} className={`px-6 py-2 rounded-full font-medium transition-colors ${isProductsActive === "cart" ? "bg-violet-600 text-white" : "text-gray-600 hover:bg-gray-100"
              }`}>
                    Cart ({cartItems.length})
                </button>

            </div>
            {isProductsActive === 'products' && <ProductionCard dataPromise={dataPromise} cartItems={cartItems} setCartItems={setCartItems} />}
      {isProductsActive === 'cart' && <Cards clearCart={clearCart} cartItems={cartItems} removeFromCart={removeFromCart} />}

        </section>

      {/* Main Section Toggle */}
      

      <StepsCards />

      <Pricing />

      <Join />

      <Footer />

       <ToastContainer position="top-right" autoClose={2000} />




    </>
  )
}

export default App
