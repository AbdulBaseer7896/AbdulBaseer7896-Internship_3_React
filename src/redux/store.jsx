import { configureStore } from '@reduxjs/toolkit';
import  cartSlice  from "./cartSlice";
import   productSlice  from "./productSlice";
import userReducer from './loginSlice';



const store = configureStore({

    reducer :{
        cart : cartSlice,
        product: productSlice,
        user: userReducer,
    }
})


export default store