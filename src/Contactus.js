import React from 'react';
import './Contactus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ManwithComputer from './assets/Group 35686.png';
import ContactForm from './Form';
function Contactus() {
    return (
        <>
        <div className="row no-gutters">
            <div className="col">
                <div className="leftside">
                <img src={ManwithComputer} alt="Manwithcomputer" />
                </div>
            </div>
            <div className="col">
                <div className="rightside">
                    <ContactForm />
                </div>
            </div>
        </div>
        </>
    )
}

export default Contactus
