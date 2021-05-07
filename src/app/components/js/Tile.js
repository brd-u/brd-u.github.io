import '../css/Tile.css'
import { SiGithub } from 'react-icons/si'
import { HiDocumentReport } from 'react-icons/hi'
import React, { useState } from 'react';
import Modal from '../modals/testResultModal.js'

const Tile = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }



    return (
        <div className="wrap">
            <div className={`tile ${props.className}`} >
                <img src={`${props.imgSrc}`} alt='company img' />

                <div className="text">
                    <h1>{props.title}</h1>
                    <h2 className="andimate-text">{props.header}</h2>
                    <p >{props.firstPar}</p>
                    <p>{props.secPar}</p>
                    <p className="tag-paragraf">{props.tags}</p>
                </div>

                <div className='animate-info-icons'>
                    <a href='https://github.com/brd-u/cypress' className='social-icon-link' target='_blank' rel="noopener noreferrer">
                        <SiGithub className='info-icon' />
                    </a>
                    <a className='social-icon-link' >
                    <HiDocumentReport onClick={setModalIsOpenToTrue} className='info-icon' />
                    </a>
                        
                </div>

                {/* <button onClick={setModalIsOpenToFalse}>x</button> */}
                {/* <AnimeList/> */}
            </div>
            <Modal show={modalIsOpen} close={setModalIsOpenToFalse} />
        </div>
    );
};

export default Tile;