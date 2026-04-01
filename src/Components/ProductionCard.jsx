import React, { use } from 'react';
import ProductsCardsUi from './ProductsCardsUi';

const ProductionCard = ({ dataPromise , cartItems, setCartItems }) => {
    const datas = use(dataPromise);

    const getBadgeStyle = (tag) => {
        switch (tag) {
            case "Best Seller":
                return "bg-orange-50 text-orange-500";
            case "Popular":
                return "bg-purple-50 text-purple-500";
            case "New":
                return "bg-emerald-50 text-emerald-500";
            case "Trending":
                return "bg-yellow-50 text-yellow-500";
            case "Best Value":
                return "bg-sky-50 text-sky-500";
            case "Essential":
                return "bg-red-50 text-red-500";
            default:
                return "bg-gray-100 text-gray-600";
        }
    };

    return (
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {datas.map((data) => (
                <ProductsCardsUi key={data.id} data={data} cartItems={cartItems} setCartItems={setCartItems} getBadgeStyle={getBadgeStyle} />
            ))}

        </div>
    );
};

export default ProductionCard;