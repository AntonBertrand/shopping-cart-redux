import React from 'react'
import { useSelector } from 'react-redux'
import { quantity } from '../features/cartSlice.js'

const Navigation = () => {

    const cartQuantity = useSelector(quantity)

  return (
    <div className='navigation'>
        <h1>Shop</h1>
        <h2>Cart: {cartQuantity}</h2>
    </div>
  )
}

export default Navigation