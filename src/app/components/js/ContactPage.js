import React from 'react';
import '../css/main.css';
import ContactForm from './contactForm.js'

function ContactPage() {

    return (
        <>
            <div className='main' >
                <div className='about'>
                    <h1 className='lg-heading'>
                        Contact <span className='text-secondary'>Me</span>
                    </h1>
                    <h2 className='sm-heading'>
                        This is how you can reach me...
                         </h2>
                    {/* <div className='contact-info'>
                        <div>
                                <span className='text-secondary'>Email: </span>
             michalbordo@gmail.com
                            </div>
                            <div>
                                <span className='text-secondary'>Phone: </span>
             +48-509-307-426
                            </div>
                            <div>
                                <span className='text-secondary'>Adress: </span>
            Siemianowice Śląskie, Poland
                            </div>
                    </div> */}
                </div>
                <ContactForm />
            </div>
           
        </>
    );

}

export default ContactPage;