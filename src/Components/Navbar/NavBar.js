import React, { useState } from 'react';
import './NavBar.css'
import logo from '../../assests/logo.png'
import contact from '../../assests/contact.png'
import menu from '../../assests/menu.png'
import {Link} from 'react-scroll';

const NavBar = () => {
  const [showMenu, setShowMenu]= useState(false);
  return (
    <div className="navbar">
        <img src={logo} alt="logo" className='logo'></img>
        <div className="desktopMemu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItm">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItm">About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItm">Projects</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItm">Certificates</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('Contacts').scrollIntoView({behavior:"smooth"});
        }}>
            <img src={contact} alt="contact" className="desktopMenuImg"/>
            Contact Me
        </button>


        <img src={menu} alt="menu" className='mobmenu' onClick={()=>setShowMenu(!showMenu)}></img>
        <div className="navMemu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className="ListItm" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}  className="ListItm" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500}  className="ListItm" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500}  className="ListItm" onClick={()=>setShowMenu(false)}>Certificates</Link>
            <Link activeClass='active' to='Contacts' spy={true} smooth={true} offset={-200} duration={500}  className="ListItm" onClick={()=>setShowMenu(false)}>Contact me</Link>
            
        </div>
    </div>
  )
}

export default NavBar
