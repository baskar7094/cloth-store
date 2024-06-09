import React from 'react'
import { ProductList } from './ProductList'
import Product from './Product'
import Home from './Home'

export default function DashBoard() {
  return (
    <div>
      <div>
        {ProductList.map(items=><Home {...items}/>)}
      </div>
      <Product/>
    </div>
  )
}
