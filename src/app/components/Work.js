import React, { Component } from 'react'
import './main.css'
import Tile from './Tile.js'
// import BarChart from './BarChart.js'
import focusTimerImg from '../assets/focus.png'
import Modal from './modals/testResultModal.js'
import { NavLink } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

class Work extends Component {




    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }

    }

    setShow = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
    }

    closeModalHandler = () => {

        this.setState(() => ({
            showModal: false
        }))
    }

    openModalHandler = () => {
        this.setState(() => ({
            showModal: true
        }))
    }


goToFocusTimerPage=()=>{

    window.location.assign('https://brd-u.github.io/focus-timer/');
}

    render() {
        return (
            <>

                {/* {this.state.showModal ? <div onClick={this.closeModalHandler} className='back-drop'></div> : null} */}
                <Modal show={this.state.showModal} close={this.closeModalHandler.bind(this)} />
                <div className='main' >

                    <div className='about'>
                        <h1 className='lg-heading'>
                            My <span className='text-secondary'>Work</span>
                        </h1>
                        <h2 className='sm-heading'>
                            Tutaj jakiś tekst
                            <div>
                                {/* <input onChange={this.handleDataChange.bind(this)} type='text' ref='number' ></input> */}
                            </div>


                        </h2>

                        <div>

                            <Tile onClick={this.openModalHandler.bind(this)} className='tile-1' imgSrc='https://avatars3.githubusercontent.com/u/12559275?s=400&v=4' title='Nigchtwatch.js' header='Tutaj jakieś coś' mainText='Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chick ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turduckenen meatloaf. Flank sirloin strip steak prosciutto kevin turducken.' />
                            <Tile onClick={this.goToFocusTimerPage.bind(this)} className='tile-2' imgSrc={focusTimerImg} title='Focus Timer' header='Tutaj jakieś coś' mainText='timerducken, pancetta bresaola pork chick ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken mea' />

                        </div>




                        {/* <Tile className='tile-2' imgSrc='https://spolecznosc.ing.pl/-/image/serverpage/image-id/787i2C9FEB8FBC026909/image-size/large/is-moderation-mode/true?v=1.0&px=999' title='ING' header='O projekcie' mainText='Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chick ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turduckenen meatloaf. Flank sirloin strip steak prosciutto kevin turducken.' />
                        <Tile className='tile-3' imgSrc='https://p2zk82o7hr3yb6ge7gzxx4ki-wpengine.netdna-ssl.com/wp-content/uploads/Azure-DevOps-3.png' title='ING' header='O projekcie' mainText='Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chick ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turduckenen meatloaf. Flank sirloin strip steak prosciutto kevin turducken.' /> */}

                        {/* <div className="chart-container">


                            <BarChart />

                        </div> */}
                    </div>

                </div>
            </>
        )

    }

}

export default Work

