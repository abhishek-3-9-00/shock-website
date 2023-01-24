import React from 'react'
import "../feature/feature.css";
// import {Falcon} from "react-icons/fa"
import { IconContext } from "react-icons";
import {AiOutlineReload} from "react-icons/ai";


export default function Feature() {
  return (
    <>  
        

        <div className="feature-section">

        <div className="feature_card">
            <div className="pic"></div>
            <div className="content">
                <h1>Why Design <br /> Matters to our live?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate architecto odit? Voluptas, incidunt error.</p>
                <button>Read More</button>
            </div>
        </div>
        <div className="feature_card">
            <div className="pic"></div>
            <div className="content">
                <h1>How to become a successful  web devloper</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate architecto odit? Voluptas, incidunt error.</p>
                <button>Read More</button>
            </div>
        </div>
        <div className="feature_card">
            <div className="pic"></div>
            <div className="content">
                <h1>The best Wordpress themes<br />according to experts.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate architecto odit? Voluptas, incidunt error.</p>
                <button>Read More</button>
            </div>
        </div>
        <div className="feature_card">
            <div className="pic"></div>
            <div className="content">
                <h1>The search for digital marketing has increased.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate architecto odit? Voluptas, incidunt error.</p>
                <button>Read More</button>
            </div>
        </div>
        <div className="feature_card">
            <div className="pic"></div>
            <div className="content">
                <h1>Reading book helps make a person better</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate architecto odit? Voluptas, incidunt error.</p>
                <button>Read More</button>
            </div>
        </div>
        <div className="feature_card">
            <div className="pic"></div>
            <div className="content">
                <h1>The President of the company will give a speech.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate architecto odit? Voluptas, incidunt error.</p>
                <button>Read More</button>
            </div>
        </div>
        <div className="feature_card">
            <div className="pic"></div>
            <div className="content">
                <h1>why design matters to our lives? </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate architecto odit? Voluptas, incidunt error.</p>
                <button>Read More</button>
            </div>
        </div>
        <div className="feature_card">
            <div className="pic"></div>
            <div className="content">
                <h1>How to become a Successful web designer?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate architecto odit? Voluptas, incidunt error.</p>
                <button>Read More</button>
            </div>
        </div>
        </div>
        
        <div className="btn">
            <button id='bt'>Load More <span><IconContext.Provider value={{size:25, color:'white'}}><AiOutlineReload/></IconContext.Provider></span></button>
        </div>


    

    </>
  )
}
