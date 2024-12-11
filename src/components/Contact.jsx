import React from 'react'
import background from '../images/contact.JPG'
import { Link } from 'react-router-dom'

export const Contact = () => {


    const submitRequest = () => {
        alert('Request Submit Successfully, We will contact you sortly');
    }

    return (
        <div className='contact_container' style={{ backgroundImage: `url(${background})`, backgroundSize: "cover",backgroundRepeat: "no-repeat",backgroundPosition: "center",height: "100vh",width: "100vw",}}> 
            <div className="bg_container" >
                <div className='top_contact'>
                    <h1>Get in Touch</h1>
                    <h4 style={{color:'#FFF'}}>Whether through volunteering, donating, or spreading awareness, your support can make a tangible difference in the lives of these children. Together, we can ensure that every child experiences "The Human Touch" of care and compassion.</h4>
                </div>
            </div>
            <div className="contact_form" >
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
                    <button onClick={submitRequest} className='contact_btn'><i class="fa-solid fa-paper-plane"></i>Submit</button>
                </div>
                <div className="form_right">
                    <h5>Contact Info.</h5>                    
                        <p><i class="fa-solid fa-phone fa-lg"></i> &emsp;  +91 90897 98987</p>
                        <p><i class="fa-solid fa-envelope fa-lg"></i>  &emsp;  info@thehumantouch.com</p>
                    <div className='social'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    </div>
                </div>
            </div>
            <div className='container' />
        </div>
    )
}
