import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import cart_add from '../Assets/cart_add.png'
import cart_remove from '../Assets/cart_remove.png'

export const CartItems = () => {
    const{all_product,cartItems,removeFromCart,addToCart,getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
            <p>add</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id] > 0){
                return <div>
                <div className="cartitems-format cartitems-format-main ">
                    <img className='carticon-product-icon' src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>{e.new_price * cartItems[e.id]}</p>
                    <img src={cart_remove} style={{height: '40px' , width: '40px'}} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    <img src={cart_add} style={{height: '40px' , width: '40px'}} onClick={()=>{addToCart(e.id)}} alt="add" />
                </div>
                <hr/>
            </div>
            }

            return null;
        })}

        <div className="cartitems-down">
        <div className="cartitems-total">
        <h1>Cart Totals</h1>
        <div>
            <div className="cartitems-total-item">
                <p>subTotal</p>
                <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
        </div>
                <button>PROCEED TO CHECKOUT</button>
    </div>
      <div className="cartitems-promocode">
        <p>If you have a promo code, Enter it here</p>
        <div className="cart-items-promobox">
            <input type = 'text' placeholder = 'promocode' />
            <button>Submit</button>
        </div>
        </div>  
    </div>
    </div>
  )
}
