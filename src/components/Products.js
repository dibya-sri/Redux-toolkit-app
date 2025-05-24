import React, { useEffect, useState } from 'react'
import{add} from '../store/cartSlice'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../store/productSlice'
import { useSelector } from 'react-redux'

const Products = () => {
    // const[productDats,setProductData]=useState([])
    const dispatch = useDispatch()
    const {data:productData,status}=useSelector((state)=>state.prodcuts)
    useEffect(()=>{
      dispatch(fetchProduct())

        // const fetchingData =async()=>{
        //     const res = await fetch("https://fakestoreapi.com/products")
        //     const data = await res.json()
        //     // console.log(data)
        //     setProductData(data)
        // }
        // fetchingData()

    },[])
  const handaleAdd=(ele)=>{
    dispatch(add(ele))
    
  }

  return (
    <div className='productsWrapper'>
        {
       productData.map(ele=>(
        <div className='card' key={ele.id}>
          <img className='img' src={ele.image}/>
          <h4>{ele.title}</h4>
          <h5>{ele.price}</h5>
          <button className='btn' onClick={()=>handaleAdd(ele)}>Add to cart</button>
        </div>
       ))
        }
    </div>
  )
}

export default Products





