import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slices/cartSlice";


export const store=configureStore({
    reducer:{
        counter: CounterSlice
    },
})