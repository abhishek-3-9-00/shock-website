import React from 'react'
import '../footer/footer.css';
import { IconContext } from "react-icons";
import {AiOutlineRight} from "react-icons/ai";
import {CgFacebook} from "react-icons/cg";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {GrLinkNext} from "react-icons/gr";

export default function Footer() {
  return (
   <>
    <div className="content_">
        <div className="section_one card">
            <div className="icon">Shock</div>
            <div className="text">Shock is the multipurpose theme for building websites powered by Bootstrap 5 and other libraries.</div>
            <h4>Contact Us</h4>
            <hr />
            <div className="info">

            <div className="contact">8948725936<button className='bt-3'>Mon-Fri</button></div>
            <p>contact@mail.com</p>
            </div>
        </div>
        <div className="section_two card">
            <h4>Quick Links</h4>
            <hr />
            <ul>
                <li><AiOutlineRight/>Who We Are</li>
                <li><AiOutlineRight/>Social Projects<button className='bt-3 '>New</button></li>
                <li><AiOutlineRight/>Our Services</li>
                <li><AiOutlineRight/>Privacy Policy</li>
            </ul>
            <button id='bt-4'>Get In Touch <IconContext.Provider value={{color:'pink', size:18}}><GrLinkNext/></IconContext.Provider></button>
        </div>
        <div className="section_three card">
            <h4>Popular Searches</h4>
            <hr />
            <div className="btnn">
                <button className='bt-5'>Environment</button>
                <button className='bt-5'>Events</button>
                <button className='bt-5'>Technology</button>
                <button className='bt-5'>Web</button>
                <button className='bt-5'>Mobile</button>
                <button className='bt-5'>Tablet</button>
                <button className='bt-5'>Desktop</button>
                <button className='bt-5'>Branding</button>
            </div>
            <h4>Follow Us</h4>
            <hr />
            <div className="share">
            <IconContext.Provider value={{className:"ic", size:30}}><CgFacebook/></IconContext.Provider>
            <IconContext.Provider value={{className:"ic", size:30}}><AiOutlineTwitter/></IconContext.Provider>
            <IconContext.Provider value={{className:"ic", size:30}}><AiFillLinkedin/></IconContext.Provider>
            
            </div>
            
        </div>
        <div className="section_four card">
            <h4>Inspiration</h4>
            <hr />
            <div className='image'></div>
        </div>
    </div>
   </>
  )
}
