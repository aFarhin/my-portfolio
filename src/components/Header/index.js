import React from 'react'
import './styles.css'
import TemporaryDrawer from "./drawer";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to='#' className='logo'>Farhin<span style={{ color: 'blue' }}> .</span></Link>
            <div className='navbar'>
                <Link className='links' to="/">Home</Link>
                <Link className='links' to="/project">Projects</Link>
                <Link className='links' to="/works">Other Works</Link>
                <Link className='links' to="/contact">Contact</Link>
              
            </div>
            <div className="mobile-drawer">
                <TemporaryDrawer />
            </div>
        </div>
    )
}

export default Header
