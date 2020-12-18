import React from 'react';
import { ReactComponent as Firebase } from './assets/_Path_3.svg';
import { ReactComponent as ReactLogo} from './assets/React-icon.svg';
import { ReactComponent as ReduxLogo} from './assets/redux-logo.svg';
import { ReactComponent as AWSLogo1} from './assets/Amazon_Web_Services_Logo (1).svg';
import { ReactComponent as AWSLogo2} from './assets/Amazon_Web_Services_Logo.svg';
import { ReactComponent as GcloudLogo } from './assets/Google.svg';
import { ReactComponent as JSlogo } from './assets/Path 37519.svg';
import {ReactComponent as NodeLogo} from './assets/NodeJS.svg';
import './Technologies.css';

function Technologies() {
    return (
        <>
        <p> What is Lorem Ipsum Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry Lorem Ipsum<br></br>has been
             an unknown printer took a galley of specimen book it has</p>
        
        <div className="technologies">
        <ul class="navTechnologies">
            <li><a href="./">Design</a></li>|
            <li><a href="./">Development</a></li>|
            <li><a href="./">Marketing</a></li>
        </ul><br></br>
            <ReactLogo className="logo"/>
            <AWSLogo1 className="logo"/>
            <GcloudLogo className="logo"/>
            <ReduxLogo className="logo"/>
            <JSlogo className="logo"/>
            <AWSLogo2 className="logo"/><br></br>
            <ReduxLogo className="logo"/>
            <NodeLogo className="logo"/>
            <Firebase className="logo"/>
            <ReactLogo className="logo"/>
            <JSlogo className="logo"/>
        </div>
        </>
    )
}

export default Technologies
