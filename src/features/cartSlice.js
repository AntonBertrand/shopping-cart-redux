import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    cartItems: [],
    quantity: 0,
    total: 0,
    isLoading: true
};

export const getCartItems = createAsyncThunk('cart/getCartItems',
() => {
    return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err))
});

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
            cartItem.amount = Number(action.payload.amount);
        },
        calculateTotals: (state) => {
            let quantity = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
                quantity += item.amount;
                total += item.amount * item.price;
            });

            state.quantity = quantity;
            state.total = total;
        }
    },
    extraReducers: {
        [getCartItems.pending] : (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled] : (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload
        },
        [getCartItems.rejected] : (state) => {
            state.isLoading = false;
        }
    }
})

export const quantity = (state) => state.cart.quantity

export const { increment, clear, removeItem, adjust, calculateTotals } = cartSlice.actions

export default cartSlice.reducer;