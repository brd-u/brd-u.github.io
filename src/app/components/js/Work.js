import React, { Component } from 'react'
import '../css/main.css'
import Tile from './Tile.js'
// import focusTimerImg from '../../assets/focus.png'
// import rogueGameImg from '../../assets/rogue.png'
import Modal from '../modals/testResultModal.js'
// import { NavLink } from 'react-router-dom'
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


    goToFocusTimerPage = () => {

        window.location.assign('https://brd-u.github.io/focus-timer/');
    }

    goToRoguelikeGamePage = () => {

        window.location.assign('https://brd-u.github.io/roguelike-game/');
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
                        <h2 className='sm-heading'>Check out some of my projects... </h2>
                        {/* <h1 className='sm-heading' >In progress...</h1> */}
                        <div >

                            <Tile className='tile-1' imgSrc='https://media-exp1.licdn.com/dms/image/C4E0BAQGhE8jNwjlc3w/company-logo_200_200/0/1554836371931?e=2159024400&v=beta&t=tQbdczcJ9C9g1pggtEXpC5CQgaFxCZn_d3CAOyeWWDU' title='Cypress' header='Sample of Automation Test Suite' firstPar='WEB: SHOP.DEMOQA.COM' secPar='Checking the basic functionalities of the test page.' tags='[ hooks, fixtures, commands, pop, env var, app actions, mochawesome report, data generators(credit card, data, id, pesel) ]' />
                            {/* <Tile onClick={this.goToFocusTimerPage.bind(this)} className='tile-2' imgSrc={focusTimerImg} title='Focus Timer' header='Tutaj jakieś coś' mainText='timerducken, pancetta bresaola pork chick ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken mea' />
                            <Tile onClick={this.goToRoguelikeGamePage.bind(this)} className='tile-3' imgSrc={rogueGameImg} title='Roguelike game' header='Tutaj jakieś coś' mainText='timerducken, pancetta bresaola pork chick ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken mea' /> */}
                            {/* <Tile onClick={this.goToRoguelikeGamePage.bind(this)} className='tile-4' imgSrc={rogueGameImg} title='Roguelike game' header='Tutaj jakieś coś' mainText='timerducken, pancetta bresaola pork chick ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken mea' /> */}
                        </div>



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

