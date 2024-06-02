import React, { useState } from 'react'
import'./Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menucolor,setMenucolor] =useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" style={{ width: '150px', height: '120px' }} />
            <p>PRICA</p>
            
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenucolor("Shop")}}><Link style={{textDecoration:'none'}} to = '/'>Shop</Link>{menucolor==="Shop"? <hr/> : <></>}</li>
            <li onClick={()=>{setMenucolor("Men")}}><Link style={{textDecoration:'none'}} to = '/mens'>Mens</Link>{menucolor==="Men"? <hr/> : <></>}</li>
            <li onClick={()=>{setMenucolor("Women")}}><Link style={{textDecoration:'none'}} to ='/womens'>Womens</Link>{menucolor==="Women"? <hr/> : <></>}</li>
            <li onClick={()=>{setMenucolor("Kid")}}><Link style={{textDecoration:'none'}} to ='/kids'>Kids</Link>{menucolor==="Kid"? <hr/> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to='/login'>
           <button>Login</button>
           </Link> 
           
            <Link to='/cart'>
            <img src={cart_icon} alt="" />
            </Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
