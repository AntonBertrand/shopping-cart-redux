import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { increment } from '../features/cartSlice';

const Products = () => {

const [counter, setCounter] = useState(0);

const dispatch = useDispatch()

function incrementCounter() {
    setCounter(prevState => prevState + 1)
}

function decrementCounter() {
    setCounter(prevState => prevState - 1)
}

function addToCart() {
    dispatch(increment(counter))
    setCounter(0)
}

  return (
    <div className='products'>

        <article className='product'>
            <img src="https://cdn.vodafone.co.uk/en/assets/images/desktop/Apple_iPhone_13_Mini_blue-full-product-front-600.png" alt="" />
            <h2>Apple Iphone</h2>
            <div className="counter-container">
            <button className='add-btn' onClick={() => incrementCounter()}>+</button>
                <p className='counter'>{counter}</p>
                <button className='minus-btn' onClick={() => decrementCounter()}>-</button>
            </div>
            <button className='add-to-cart' onClick={() => addToCart()}>Add to Cart</button>
        </article>

    </div>
  )
}

export default Products