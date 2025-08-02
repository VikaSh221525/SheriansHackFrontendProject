import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Product = () => {
    const products = useSelector((state) => state.products.products);
    console.log(products);

    const renderproducts = products.map(product => {
        return <Link to={`/product/${product.id}`} key={product.id} className="cursor-pointer">
            <div className="relative bg-white rounded-3xl flex flex-col items-center gap-4 w-72 hover:shadow-md transition-shadow duration-300 group overflow-hidden">
                {/* Product Image */}
                <div className="flex-shrink-0 relative ">
                    <img
                        className="object-contain rounded-t-2xl border border-gray-200 bg-gray-100 group-hover:scale-102 duration-200"
                        src={product.image}
                        alt='Image'
                    />
                    {product.discount > 0 ? <><span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">{product.discount}%</span></> : <></>}
                </div>
                {/* Product Info */}
                <div className="flex flex-col justify-between h-full w-full px-5 pb-5">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2"> {product.title.length > 30 ? `${product.title.slice(0,20)}...` : product.title } </h2>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-green-600">Rs.{product.price}</span>
                    </div>
                </div>
            </div>
        </Link>
    })

    return products.length > 0 ?
        <>
            <h1 className='text-5xl font-semibold w-full bg-gray-100 px-20 py-5 mb-10'>Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20 mb-10">
                {renderproducts}
            </div>
        </> : <div>Loading...</div>
}

export default Product