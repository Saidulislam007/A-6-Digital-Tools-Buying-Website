import React, { useState } from 'react';

const ProductsCardsUi = ({ data , getBadgeStyle , cartItems, setCartItems}) => {
    const[isBuying, setIsBuying] = useState(false)

    const handleBuyNow = () => {
        setIsBuying(true);
        setCartItems([...cartItems, data]);  

    }


    return (
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all flex flex-col h-full" key={data.id}>
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center p-2.5 shadow-sm border border-gray-50">
                            <img src={data.icon} alt={data.name} className="w-full h-full object-contain" />
                        </div>
                        <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${getBadgeStyle(data.tag)}`}>
                            {data.tag}
                        </span>
                    </div>

                    {/* Titles and Description */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{data.name}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed mb-6 flex-grow">
                        {data.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-baseline mb-6">
                        <span className="text-2xl font-extrabold text-gray-900">${data.price}</span>
                        <span className="text-gray-400 text-sm font-medium ml-1">{data.period}</span>
                    </div>

                    <ul className="space-y-3 mb-6">
                        {data.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-500">
                                <svg className="w-4 h-4 text-green-500 mr-2.5 shrink-0 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                </svg> {feature}
                            </li>
                        ))}
                    </ul>

                    <button onClick={handleBuyNow} className={`w-full py-3.5 rounded-full text-sm font-semibold transition-colors mt-auto ${isBuying ? "bg-green-50 text-green-600 border border-green-200 cursor-not-allowed" : "bg-[#8b3eff] text-white hover:bg-[#7828f6]"} `} disabled={isBuying}
                        >{isBuying ? "Added To Cart" : "Buy Now"}</button>
                </div>
    );
};

export default ProductsCardsUi;