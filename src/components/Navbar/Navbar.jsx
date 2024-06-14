import React, { useContext, useRef, useState } from 'react'
import'./Navbar.css'
import logo from '../Assets/balkrishna.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import menubar from '../Assets/menu.png'

export const Navbar = () => {
    const [menucolor,setMenucolor] =useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef();
    const menubar_toggle = (e) => {
     menuRef.current.classList.toggle('nav-menu-visible');
     e.target.classList.toggle('open')

    } 
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" style={{ width: '150px', height: '120px', borderRadius: '150px' }} />
            <p>BALA</p>
            
        </div>
        <img className='menu_dropdown' style={{ width: '50px', height: '50px' }}  onClick={menubar_toggle} src={menubar} alt="" />
        <ul ref={menuRef}  className='nav-menu'>
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
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
