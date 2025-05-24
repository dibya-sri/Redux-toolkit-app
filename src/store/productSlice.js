
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const STATUSES=Object.freeze({
    IDLE:"idle",
    ERROR:"error",
    LOADING:"Loading"
})
const prodcutSlice = createSlice({
    'name':"product",
    initialState:{
        data:[],
        status:STATUSES.IDLE
    },
    reducers:{
        setProduct(state,action){
            state.data=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        }
    }




    }
)
export  const {setProduct,setStatus} =prodcutSlice.actions;
export default prodcutSlice.reducer;

//thunks........











export function fetchProduct(){
    
    return async function fetchProductThunk(dispatch,getstate) {
           dispatch(setStatus(STATUSES.LOADING)) 
           try{
                const res = await fetch("https://fakestoreapi.com/products")
                const data = await res.json()
                dispatch(setProduct(data))
                dispatch(setStatus(STATUSES.IDLE))
               }
               catch(error){
                     dispatch(setStatus(STATUSES.ERROR))
                   }
            
                }
            
            }


            
            