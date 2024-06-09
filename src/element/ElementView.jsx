import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoard from './DashBoard'
import Product from './Product'
import Cart from './Cart'

export default function ElementView() {
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<DashBoard />} />
                    <Route path='product/:id' element={<Product />} />
                    <Route path='cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}
