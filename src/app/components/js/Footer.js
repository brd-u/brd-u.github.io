import { NavLink } from 'react-router-dom'
import '../css/Footer.css'


function Footer() {



    return (
        <>
            <footer id='main-footer'>
                <div>
                    <p>
                        <NavLink to='/' className='nav-footer-link' activeClassName="nav-footer-link active" exact={true}  >
                            home
                            </NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to='/about' className='nav-footer-link'>
                            about me
                            </NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to='/work' className='nav-footer-link'>
                            my work
                            </NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to='/contact' className='nav-footer-link'>
                            contact
                            </NavLink>
                    </p>
                    <p className='mail-footer'>
                        <a href="mailto:michalbordo@gmail.com">michalbordo@gmail.com</a>
                    </p>
                    <p className='sm-heading-footer'>
                        Quality Assurance Specialist
                    </p>
                </div>
            </footer>

        </>
    )
}

export default Footer
