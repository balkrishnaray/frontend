import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_logo from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} style={{width: '100px', height: '100px'}} alt="" />
            <p>PRICA</p>
        </div>
        <ul className='footer-links'>
       <li>Company</li>
       <li>Products</li>
       <li>Offices</li>
       <li>About</li>
       <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footers-icons-container">
                <img src={instagram_logo} alt="" />
            </div>
            <div className="footers-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>

        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}
