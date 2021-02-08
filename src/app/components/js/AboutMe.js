import React, { Component } from 'react'
import '../css/main.css'
// import DoughnutChart from './DoughnutChart.js'
import { SiJira, SiJavascript, SiHtml5, SiCss3, SiBitbucket, SiMicrosoftoffice, SiNodeDotJs, SiVisualstudiocode, SiAutodesk, SiInkscape, SiSlack } from 'react-icons/si'

import { Icon} from '@iconify/react';
import nightwatchIcon from '@iconify-icons/file-icons/nightwatch';


class AboutMe extends Component {

    state = {



    }


    render() {
        return (
            <>
                <div className='main' >
                    <div className='about'>
                        <h1 className='lg-heading'>
                            About <span className='text-secondary'>Me</span>
                        </h1>
                        <h2 className='sm-heading'>
                            Let me tell you a few things...
                </h2>
                        <div className='about-info'>
                            <div className="bio-image">

                            </div>

                            <div className='bio'>
                                <h3 className='text-secondary'>BIO</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet semper nunc. Fusce dictum erat in neque faucibus. I am a meticulous person who easily assimilates knowledge about new technologies.is iaculis sem posuere feugiat. Sed commodo lacus vel diam semper, vel tempus lacus lacinia.</p>
                                {/* Hello !! My name is Rolwin Reevan Monteiro. I'm a full stack web developer who is passionate about various web technologies. I like to experiment with different web technologies. I have an experience of nearly 3 years working with LAMP stack, MERN stack and ELK stack. Building fancy UI's just like this one that your seeing 😅 and writing blogs about tech stacks is what Rolwin loves to do. Check my blog which I update every week for some Javascript and some cool notes on web technologies.

                                Currently I work mostly with Javascript technologies like ReactJS and NodeJS. I also have hands on experience working with cloud infrastructures like AWS/GCP and have deployed applications keeping scalability in mind. Docker, Kubernetes, Jenkins, SonarQube are some of the cool tools I use for CI/ CD. I'm always a learner and a self taught programmer. */}
                            </div>
                            <div className='job job-1'>
                                <div className='job-text-container'>
                                    <h3>21 CN</h3>
                                    <h5>Software Tester</h5>
                                    <h6>October 2018 - October 2019</h6>
                                    <p><span className='text-secondary'>•</span> Building a test framework, test automation - a project carried out for ING Usługi dla Biznesu S.A.</p>
                                    <p><span className='text-secondary'>•</span> Performing manual tests</p>
                                    <p><span className='text-secondary'>•</span> Developing automated scripts either of the following: from scratch or basing on manual test cases</p>
                                    <p><span className='text-secondary'>• </span> Creating test cases and test plans, reporting bugs</p>

                                </div>
                                <div className='animate-icons'>
                                    <SiJira className='job-icon' />
                                    <SiMicrosoftoffice className='job-icon' />
                                    <SiVisualstudiocode className='job-icon' />
                                    <Icon icon={nightwatchIcon} className='job-icon' color='rgba(209, 165, 98, 0.64)' />
                                    <SiSlack className='job-icon' />
                                    <SiJavascript className='job-icon' />
                                    <SiHtml5 className='job-icon' />
                                    <SiCss3 className='job-icon' />
                                    {/* <SiBitbucket className='job-icon'/> */}
                                    <SiNodeDotJs className='job-icon' />
                                </div>
                            </div>
                            <div className='job job-2'>
                                <div className='job-text-container'>
                                    <h3>AMD</h3>
                                    <h5>Data Analyst</h5>
                                    <h6>October 2019 - Present</h6>
                                    <p><span className='text-secondary'>•</span> Implementing VBA scripts for Autodesk inventor</p>
                                    <p><span className='text-secondary'>•</span> Creating cost estimates, business plans</p>
                                    <p><span className='text-secondary'>•</span> Analyzing new investments</p>
                                </div>
                                <div className="chart-container">
                                    {/* <DoughnutChart

                                    // data={this.state.data[3].data}
                                    // title={this.state.data[3].title}
                                    // colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
                                    /> */}
                                </div>
                                <div className='animate-icons'>
                                    <SiInkscape className='job-icon' />
                                    <SiAutodesk className='job-icon' />
                                    <SiMicrosoftoffice className='job-icon' />
                                </div>
                            </div>


                            <div className='job job-3'>
                                <div className='job-text-container'>
                                    <h3>A.S Adrian Stern</h3>
                                    <h5>Software Tester</h5>
                                    <h6>August 2019 - Present</h6>
                                    <p><span className='text-secondary'>•</span> Performing manual tests</p>
                                    <p><span className='text-secondary'>• </span> Creating test cases and test plans, reporting bugs</p>
                                    <p><span className='text-secondary'>• </span> Creating application user manuals</p>
                                    <p><span className='text-secondary'>• </span> Implementation of automatic e2e tests</p>

                                </div>
                                <div className="chart-container">
                                    {/* <DoughnutChart
                                    // data={this.state.data[3].data}
                                    // title={this.state.data[3].title}
                                    // colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
                                    /> */}
                                </div>
                                <div className='animate-icons'>
                                    <SiJira className='job-icon' />
                                    <SiMicrosoftoffice className='job-icon' />
                                    <SiVisualstudiocode className='job-icon' />
                                    <Icon icon={nightwatchIcon} className='job-icon' color='rgba(209, 165, 98, 0.64)' />
                                    <SiSlack className='job-icon' />
                                    <SiBitbucket className='job-icon' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default AboutMe

