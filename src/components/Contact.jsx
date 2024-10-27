import React from 'react'
import background from '../images/contact.JPG'
import { Link } from 'react-router-dom'

export const Contact = () => {
    return (
        <div className='contact_container'> 

            <div className="bg_container"style={{ backgroundImage: `url(${background})` }}>
                <div className='top_contact'>
                    <h1>Get in Touch</h1>
                    <p>Don't be shy, Give us a call or drop us a line.</p>
                    <p>Let's make some magic together.</p>
                </div>
            </div>
            <div className="contact_form">
                <div className="form_left">
                    <h2>Send a Message</h2>
                    <form action="#">
                        <div>
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                        </div>
                        <div>
                        <input type="text" placeholder='Phone No.' />
                        <input type="text" placeholder='Email' />
                        </div>
                        <input type="text"  placeholder='Group or Comapny Name' className='form_group'/>
                        <textarea type="text" placeholder='How can we help'  className='form_group'/>
                    </form>
                    <button className='contact_btn'><i class="fa-solid fa-paper-plane"></i>  Submit</button>
                </div>
                <div className="form_right">
                    <h5>Contact Info.</h5>                    
                        <p><i class="fa-solid fa-phone fa-lg"></i> &emsp;  +91 XXXXX XXXXX</p>
                        <p><i class="fa-solid fa-envelope fa-lg"></i>  &emsp;  info@support.com</p>
                    <div className='social'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}
