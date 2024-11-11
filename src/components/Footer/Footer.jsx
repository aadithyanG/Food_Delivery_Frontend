import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (

        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum nobis dolore rerum eos, dolorem molestiae quaerat? Saepe nisi non, temporibus consectetur est placeat officiis quis iusto quidem natus suscipit!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-222-356-786-8888</li>
                        <li>examplemail@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">
                CopyRight 2024 @ tomato.com - All Rights Reserved. </p>
        </div>
    )
}

export default Footer
