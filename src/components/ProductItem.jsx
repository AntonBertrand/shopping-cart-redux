import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment, addToCart } from '../features/cartSlice';

const ProductItem = (product) => {

const dispatch = useDispatch();

const [counter, setCounter] = useState(0);

function incrementCounter() {
    setCounter(prevState => prevState + 1)
}

function decrementCounter() {
    setCounter(prevState => prevState - 1)
}

function addProduct(item) {
    dispatch(increment(counter))
    dispatch(addToCart(item))
    console.log(item)
    setCounter(0)
}


return (
                <article className='product' key={product.product.id}>
                <img src={product.product.img} alt="" />
                <h2>{product.product.title}</h2>
                <div className="counter-container">
                <button className='add-btn' onClick={() => incrementCounter()}>+</button>
                    <p className='counter'>{counter}</p>
                    <button className='minus-btn' onClick={() => decrementCounter()}>-</button>
                </div>
                <button className='add-to-cart' onClick={() => addProduct(product.product)}>Add to Cart</button>
            </article>
            )
}

export default ProductItem