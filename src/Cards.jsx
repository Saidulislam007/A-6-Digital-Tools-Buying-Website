
const Cards = ({ cartItems, removeFromCart,clearCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

   

    
    return (
        <div className="w-full  max-w-5xl mx-auto px-4">


            <div className=" rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12">

                <h3 className="text-2xl font-bold text-[#111827] mb-8">
                    Your Cart
                </h3>

                {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">Your cart is currently empty.</p>
          </div>
        ):(
        <div className="space-y-4 mb-10">
                    {
                        cartItems.map(cartItem => <div
                            key={cartItem.id}
                            className="flex items-center justify-between p-6 bg-[#F9FAFB] rounded-2xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100"
                        >
                            <div className="flex items-center space-x-6">
                                {/* Product Icon Box */}
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm p-3 flex items-center justify-center border border-gray-50">
                                    <img src={cartItem.icon} alt={cartItem.name} className="w-full h-full object-contain" />
                                </div>

                                {/* Product Info */}
                                <div>
                                    <h4 className="text-lg font-bold text-[#111827] mb-1">{cartItem.name}</h4>
                                    <p className="text-gray-500 font-medium">${cartItem.price}</p>
                                </div>
                            </div>

                            {/* Remove Button - Matches Pink Color in Image */}
                            <button
                            onClick={() => removeFromCart(cartItem.id)}
                               className="text-[#FF4D8D] font-bold text-sm hover:text-[#e6457e] transition-colors px-4 py-2"
                            >
                                Remove
                            </button>
                        </div>)
                    }
                    <div className="mt-8 border-t border-gray-100 pt-8">

                    <div className="flex justify-between items-center mb-10">
                        <span className="text-gray-400 font-medium text-lg">
                            Total:
                        </span>
                        <span className="text-[32px] font-bold text-[#111827]">
                            ${totalPrice.toFixed(2)}
                        </span>
                    </div>

                    <button onClick={clearCart} className="w-full bg-[#8b3eff] hover:bg-[#7828f6] text-white py-5 rounded-full text-lg font-bold transition-all shadow-lg shadow-purple-100">
                        Proceed To Checkout
                    </button>

                </div>
                
                </div>)}

                {/* Example Items UI (Static দেখানোর জন্য) */}
                

                {/* Footer UI */}
                

            </div>
        </div>
    );
};

export default Cards;