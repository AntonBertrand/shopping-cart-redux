import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../cartItems'

const initialState = {
    cartItems: cartItems,
    quantity: cartItems.length,
    total: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.quantity += action.payload
        },
        clear: (state) => {
            state.cartItems = []; 
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => 
                item.id != itemId );
        },
        adjust: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
            cartItem.amount = action.payload.amount;
            console.log(action.payload.amount)
        }
    }
})

export const quantity = (state) => state.cart.quantity

export const { increment, clear, removeItem, adjust } = cartSlice.actions

export default cartSlice.reducer;