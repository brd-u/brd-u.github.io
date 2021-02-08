import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'
import { FaTimes, FaBars } from 'react-icons/fa'

function Navbar() {


    const [click, setClick] = useState(false)
    // const [button, setButton] = useState(false)



    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)



    return (
        <>

            <header className='head'>
                <div className={click ? 'menu-btn-clsd' : 'menu-btn-opn'} onClick={handleClick} >
                    {click ? <FaTimes /> : <FaBars />}
                    {/* <div className='btn-line'></div>
                    <div className='btn-line'></div>
                    <div className='btn-line'></div> */}
                </div>
                <nav className='menu' >
                    <div className={click ?  'menu-branding active':'menu-branding' } onClick={handleClick}>
                        <div className='portrait'></div>
                        {/* <Link to='/' className='navbar-logo'>
                            BRD
                    </Link> */}
                    </div>
                    <ul className={click ?  'menu-nav active':'menu-nav' } onClick={handleClick} >
                        <li className='nav-item'>
                            <NavLink  to='/' className='nav-link'  activeClassName="nav-link active" exact={true} onClick={closeMenu}>
                                HOME
                                
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/about' className='nav-link' onClick={closeMenu}>
                                ABOUT ME
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/work' className='nav-link' onClick={closeMenu}>
                                MY WORK
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/contact' className='nav-link' onClick={closeMenu}>
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar
