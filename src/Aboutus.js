import React from 'react';
import './Aboutus.css';
import sideImage2 from './assets/aboutus.png';
import { ReactComponent as Pointer } from './assets/Group 35626.svg';

function Aboutus() {
    return (
        <>
        <div className="sideImage">
            <img src={sideImage2} alt="abcd"/>
            <div className="aboutusText">
            <h2 style={{color: "rgb(0,156,255)"}}><Pointer />  ABOUT US</h2>
            <h2><strong>Great Digital Agency</strong></h2>
            <p><strong>Our products are fully custom-made, built with the 
               <br></br> latest technologies and cloud-architectures.</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam<br></br> ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque <br></br>habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br></br> In convallis porta mauris non aliquam.</p>
            </div>
        </div>
        
        </>
    )
}

export default Aboutus
