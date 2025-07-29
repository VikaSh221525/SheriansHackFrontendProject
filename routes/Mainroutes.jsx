import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Mainroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/products' element={<Product/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/register' element={<Register/>} ></Route>
        </Routes>
    )
}

export default Mainroutes