import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import ProductReducer from './productSlice'


const Store = configureStore({
        reducer:{
             "cart":cartReducer,
             "prodcuts":ProductReducer
            }
        })
        export default Store; 
        
        
 
        










        
