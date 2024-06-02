import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import leaves from '../Assets/leaves.png'
import leaves_wire from '../Assets/leaves-wire.png'
 
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>New Arrivals Only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    {/* <img src={hand_icon} alt="" /> */}
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
           <img className='leaves-first' src={leaves_wire} style={{height:"650px", weight:"550px"}}  alt="" />
           {/* <img className='leaves-second' src={leaves} style={{height:"150px", weight:"150px"}} alt="" />
           <img className='leaves-third' src={leaves} style={{height:"150px", weight:"150px"}} alt="" />
           <img className='leaves-fouth' src={leaves} style={{height:"150px", weight:"150px"}} alt="" />
           <img className='leaves-fifth' src={leaves} style={{height:"150px", weight:"150px"}} alt="" /> */}
        </div>
   </div>
  )
}
