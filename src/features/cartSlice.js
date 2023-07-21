import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    cartItems: [],
    productStore: [],
    quantity: 0,
    total: 0,
    isLoading: true
};

export const getProductItems = createAsyncThunk('shop/getProductItems',
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
        },
        addToCart: (state, action) => {
            state.cartItems.push(action.payload)
        }
    },
    extraReducers: {
        [getProductItems.pending] : (state) => {
            state.isLoading = true;
        },
        [getProductItems.fulfilled] : (state, action) => {
            state.isLoading = false;
            state.productStore = action.payload
        },
        [getProductItems.rejected] : (state) => {
            state.isLoading = false;
        }
    }
})

export const quantity = (state) => state.cart.quantity

export const { increment, clear, removeItem, adjust, calculateTotals, addToCart } = cartSlice.actions

export default cartSlice.reducer;