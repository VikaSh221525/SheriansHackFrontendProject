import React from 'react'
import { motion } from "motion/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Home = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-screen overflow-hidden">
                <SwiperSlide>
                    <div className='flex'>
                        <div className='flex flex-col w-[40%] h-full'>
                            <div className='w-full h-1/2'>
                                <img className='object-cover' src="https://elexy-demo.myshopify.com/cdn/shop/files/hero-banner-1.png?v=1719895760&width=1100" alt="" />
                            </div>
                            <div className='w-full h-1/2'>
                                <img className='object-cover' src="https://elexy-demo.myshopify.com/cdn/shop/files/hero-banner-1.png?v=1719895760&width=1100" alt="" />
                            </div>
                        </div>
                        <div className='w-[60%] h-full'>
                            <img className='object-cover' src="https://elexy-demo.myshopify.com/cdn/shop/files/hero-banner-3.png?v=1719895849&width=1100" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='w-full h-full relative'>
                        <img className='object-cover' src="https://elexy-demo.myshopify.com/cdn/shop/files/bg-and-image-6.png?v=1724586047&width=2000" alt="" />
                        <div className='absolute top-40 left-20 flex flex-col gap-5 w-1/2'>
                            <h1 className=' text-4xl'>INTILECT PRO V25S</h1>
                            <p className='text-7xl leading-none font-semibold'>AI based CCTV Solutions for Home and Business</p>
                            <p>Closed-Circuit Television (CCTV) is a video surveillance system used to monitor and record activities in various environments for security, safety, and monitoring purposes.</p>
                            <motion.button whileHover={{ y: -1, scale: 1.05 }} whileTap={{ y: 0, scale: 1 }} transition={{ type: "easeInOut", duration: 0.3 }} className='py-3 px-8 bg-black text-white w-fit rounded-4xl cursor-pointer'>Shop Now</motion.button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-blue-300'>Slide 3</SwiperSlide>
            </Swiper>

            {/* Hot Deal Products */}
            <div className="mt-20 bg-gray-50 py-10 px-20">
                <h1 className="text-5xl font-bold mb-8 text-gray-900">Today's Hot Deal</h1>
                <div className="flex gap-6 justify-start">
                    <div className="relative bg-white rounded-3xl shadow-xl flex flex-col items-center gap-4 w-72 hover:shadow-2xl transition-shadow duration-300">
                        {/* Product Image */}
                        <div className="flex-shrink-0 relative">
                            <img
                                className="object-contain rounded-t-2xl border border-gray-200 bg-gray-100"
                                src="https://elexy-demo.myshopify.com/cdn/shop/files/product-11_ed84a993-fd45-4e85-a944-6c37d991f260.png?v=1713259767&width=990"
                                alt="Samsung TV"
                            />
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">-10%</span>
                        </div>
                        {/* Product Info */}
                        <div className="flex flex-col justify-between h-full w-full px-5 pb-5">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Samsung 55" 4K UHD Smart TV</h2>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl font-bold text-green-600">Rs. 19,000</span>
                                <span className="text-base text-gray-400 line-through">Rs. 21,000</span>
                                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">Limited Time Offer</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="px-4 py-2 bg-black text-white rounded-xl font-semibold shadow hover:bg-gray-800 transition-colors duration-200">
                                    Buy Now
                                </button>
                                <button className="px-4 py-2 border border-black text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* product highlights */}
            <div className='flex py-10 px-20 gap-10'>
                <div className='overflow-hidden rounded-2xl'><img className='rounded-2xl hover:scale-105 transition-all duration-200' src="https://elexy-demo.myshopify.com/cdn/shop/files/demo-5-banner-4.png?v=1724315849&width=1100" alt="" /></div>
                <div className='overflow-hidden rounded-2xl'><img className='rounded-2xl hover:scale-105 transition-all duration-200' src="https://elexy-demo.myshopify.com/cdn/shop/files/demo-5-banner-5.png?v=1724316077&width=1100" alt="" /></div>
            </div>

            {/* Products */}


            {/* what we offer */}
            <div className='w-full flex justify-between items-center py-10 px-20'>
                <div className='flex flex-col items-center justify-center gap-3 text-center'>
                    <img srcset="" sizes="(min-width: 990px) 100vw, 100vw" src="//elexy-demo.myshopify.com/cdn/shop/files/text-icon-1.svg?v=1720505997&amp;width=375" alt="" loading="lazy" width="78" height="64" />
                    <h1 className='text-lg font-semibold'>Free Shipping</h1>
                    <p className='text-gray-400'>Buy product over $100 and get free home delivery <br /> offer</p>
                </div>
                <div className='w-[1px] h-10 bg-black/40'></div>
                <div className='flex flex-col items-center justify-center gap-3 text-center'>
                <img srcset="" sizes="(min-width: 990px) 100vw, 100vw" src="//elexy-demo.myshopify.com/cdn/shop/files/text-icon-2.svg?v=1720582346&amp;width=375" alt="" loading="lazy" width="78" height="66"/>
                    <h1 className='text-lg font-semibold'>Easy Return Policy</h1>
                    <p className='text-gray-400'>Provide 30 day easy Return policy for all of our <br /> customer</p>
                </div>
                <div className='w-[1px] h-10 bg-black/40'></div>
                <div className='flex flex-col items-center justify-center gap-3 text-center'>
                <img srcset="" sizes="(min-width: 990px) 100vw, 100vw" src="//elexy-demo.myshopify.com/cdn/shop/files/text-icon-3.svg?v=1720582346&amp;width=375" alt="" loading="lazy" width="78" height="66"/>
                    <h1 className='text-lg font-semibold'>Secure Payment</h1>
                    <p className='text-gray-400'>We conform you that payment system are totally <br /> secure</p>
                </div>
            </div>

        </>
    )
}

export default Home