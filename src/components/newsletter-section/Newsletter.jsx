import React from 'react'
import '../newsletter-section/news.css'

export default function Newsletter() {
  return (
    <>  
    <div className="br_image"></div>
        <div className="newsletter">
            <div className="left">
                <h1>Subscribe</h1>
                <h2>to our <span>newsletter</span>!</h2>                
                <p>Subscribe to our newsletter and follow  our content. <br /> Receive news based on what has to do with you.</p>
            </div>
            <div className="right">
                <div className="sign">

                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                </div>
                <div className="tacbox">
                    <input id="checkbox" type="checkbox" />
                    <label for="checkbox"> I agree to the <a href="/">Terms of Use</a>.</label>
                </div>
                <div className="subscribe">
                    <button id='sub'>Subscribe</button>
                </div>
                
                
            </div>
        </div>
    </>
  )
}
