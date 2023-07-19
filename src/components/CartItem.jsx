import React from 'react'
import { useDispatch } from 'react-redux'
import { adjust, removeItem } from '../features/cartSlice';

const CartItem = ({id, img, title, price, amount}) => {

    const dispatch = useDispatch();

  return (
    <article className='cart-item'>
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4>£{price}</h4>
            <button className="remove-btn" onClick={ () => dispatch(removeItem(id))}>Remove</button>
        </div>
        <div className="amount-container">
            <input type="number" className='amount' placeholder={amount} onChange={(e) => {dispatch(adjust({id: id, amount: e.target.value}))}}/>
        </div>
    </article>
  )
}

export default CartItem