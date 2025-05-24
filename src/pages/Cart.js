
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'
const Cart = () => {
    const productList = useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    //remove items from cart items
    const handaleRemove=(productId)=>{
        dispatch(remove(productId))
    }
  return (
    <div>
        <h2>Product List </h2>
        {
            productList.map((item)=>(
            <div className='cartCard'>
               <img src={item.image}/>
                <h3>{item.title}</h3>
                <h4>{item.price}</h4>
                <button className='btn' onClick={()=>handaleRemove(item.id)}>remove</button>
            </div>
            ))
        }
    </div>
  )
}

export default Cart

