import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {id} = useParams();
    const products = useSelector((state) => state.products.products);
    const product = products.find(p => p.id === id);
    
    return (
        <>
            <div className='w-full min-h-screen'>
                <h1 className='text-3xl font-semibold w-full bg-gray-100 px-20 py-5'>Update Product</h1>
                <div className='flex justify-center items-center w-full py-15'>
                    <div className='w-[60rem] mx-auto flex flex-row bg-gray-100 rounded-2xl p-5'>
                        <div className='w-1/2 flex flex-col gap-5'>
                            <div className='w-full h-1/2'>
                                <img className='object-contain w-full h-full rounded-3xl' src={product?.image} alt={product?.title} />
                            </div>
                            <p className='text-gray-500'>Home/{product?.category} </p>
                            <h1 className='text-4xl font-semibold'>{product?.title}</h1>
                            <p className='text-lg text-gray-700'>{product?.description}</p>
                            <span className='text-2xl font-bold text-green-600'>Rs. {product?.price}</span>
                            {product?.discount > 0 && <span className='text-red-500 text-lg'>Discount: {product?.discount}%</span>}

                        </div>
                        <div className='w-1/2 px-10 pt-20 pb-15'>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UpdateProduct