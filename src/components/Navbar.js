import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items = useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span className='logo'>Redux store</span>
        <div>
        <Link to="/" className='navLink'>Home</Link>
        <Link to="/cart" className='navLink'>cart</Link>
        </div>
        <span className='cartCard'>cartItme:{items.length}</span>

    </div>
  )
}

export default Navbar


