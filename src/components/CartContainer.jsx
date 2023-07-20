import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear } from '../features/cartSlice';
import CartItem from './CartItem';

const CartContainer = () => {

    const dispatch = useDispatch();
    const { cartItems, total, quantity } = useSelector((store) => store.cart);
  
    if (quantity < 1 ) {
    return (
    <div className='cart'>

        <h2>Your Cart</h2>
        <h4>Is currently empty!</h4>

    </div>
  )} 

  return (
    <div className='cart'>

    <h2>Your Cart</h2>
    <div className="cart-items">
        {cartItems.map((item) => {
            return <CartItem key={item.id} {...item}/>
        })}
    </div>

    <div className="cart-footer">
        <h4>Total: <span>£{total.toFixed(2)}</span></h4>
    </div>

    <button className='cart-clear-btn' onClick={() => dispatch(clear())}>Clear Cart</button>
    <button className='cart-checkout-btn'>Checkout</button>


</div>
  )

}

export default CartContainer