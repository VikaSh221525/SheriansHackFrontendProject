import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetails from '../pages/ProductDetails'
import UpdateProduct from '../pages/admin/UpdateProduct'
import UserProfile from '../pages/users/UserProfile'
import PageNotFound from '../pages/PageNotFound'
import AuthWrapper from './AuthWrapper'

const Mainroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/products' element={<Product/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/register' element={<Register/>} ></Route>
            <Route path='/userprofile' element={<UserProfile/>} ></Route>
            <Route path='/admin/create-product' element={ <AuthWrapper><CreateProduct/></AuthWrapper> } ></Route>
            <Route path='/admin/update-product/:id' element={ <AuthWrapper><UpdateProduct/></AuthWrapper> } ></Route>
            <Route path='/product/:id' element={<ProductDetails/>} ></Route>
            <Route path='*' element={<PageNotFound/>} ></Route>
        </Routes>
    )
}

export default Mainroutes