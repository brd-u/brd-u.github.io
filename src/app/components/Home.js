import React from 'react'
import './main.css'
// import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import {AiFillBehanceCircle} from 'react-icons/ai'

function Home() {


    return (
        <>
            <div className='main home' >
                <h1 className='lg-heading'>
                    Michał <span className='text-secondary'>Bordoszewski</span>
                </h1>
                <h2 className='sm-heading'>
                Quality Assurance Specialist 
                </h2>
                <div className='icons'>
                    <a href='https://github.com/michalbordo' className='social-icon-link' target='_blank' rel="noopener noreferrer">
                        <FaGithub className='ra-icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/michałbordoszewski' className='social-icon-link' target='_blank' rel="noopener noreferrer">
                        <FaLinkedin className='ra-icon' />
                    </a>
                    <a href='https://www.behance.net/brd_me' className='social-icon-link' target='_blank' rel="noopener noreferrer">
                        <AiFillBehanceCircle className='ra-icon' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Home

