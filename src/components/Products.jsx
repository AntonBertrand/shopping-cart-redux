import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { increment } from '../features/cartSlice';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const Products = () => {

const [counter, setCounter] = useState(0);
const { productStore } = useSelector((store) => store.cart);

const dispatch = useDispatch()


  return (
    <div className='products'>

        {productStore.map((item) => {
                    return <ProductItem product={item}/>
                })}

    </div>
  )
}

export default Products