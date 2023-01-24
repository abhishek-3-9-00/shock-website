import React from 'react'
import "../nav/style.css";
import {AiOutlineDoubleRight} from "react-icons/ai";
import {BiCartAlt} from "react-icons/bi";
import {ImSearch} from "react-icons/im";
import { IconContext } from "react-icons";

export default function Header() {
  return (
    <>
      <section>
      
      <div className="container">
        
          <div className="logo"><h1>Shock</h1></div>
          <div className='menu'>
          <ul>
            <li><a href="/">Demos</a></li>
            <li><a href="/">Elements</a></li>
            <li><a href="/">Pages</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Blog</a></li>
            <li id='cart'><a href="/"><IconContext.Provider value={{size:25}}><BiCartAlt/></IconContext.Provider></a></li>
            <li id='search'><a href="/"><IconContext.Provider value={{size:20}}><ImSearch/></IconContext.Provider></a></li>
          </ul>
          </div>
          
          <button id='stock'>Buy Shock</button>
        </div>
        <div className="heading">
          <h1>Discover Our</h1>
          <p>new project <span>portfolio</span>.</p>
        </div>
        <div className="footer">
          <ul>
            <li><a href="/">Home</a><span>
      <AiOutlineDoubleRight />
    </span></li>
            <li><a href="/">Portfolio</a><span><AiOutlineDoubleRight/></span></li>
            <li><a href="/">New Project Portfolio.</a></li>
          </ul>
        </div>
        </section>
    </>
  )
}
