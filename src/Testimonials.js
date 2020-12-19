import React from 'react';
import './Testimonials.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo from './assets/lady.png';
import { ReactComponent as Pointer } from './assets/Group 35626.svg';
import { ReactComponent as SideArrows } from './assets/Group 35601.svg';
import { ReactComponent as ReactIcon } from './logo.svg';

function Testimonials() {
    return (
        <div class="SelectedCustomers">
            <div className="row no-gutters">
            <div className="col">
                <div className="leftOfpage">
                    <div className="leftimage">
                        <img src={Photo} alt="imageOflady"/>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="rightOfpage">
                    <h4 style={{color: "rgb(0,156,255)"}}><Pointer />SELECTED CUSTOMERS</h4>
                    <h2>Check What our client<br></br> say about us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex<br></br> turpis accumsan congue. Quisque blandit dui Pellentesque habitant<br></br> morbi tristique senectus et netus et malesuada fames ac turpis<br></br> egestas. In convallis porta mauris non aliquam.</p>
                    <ReactIcon style={{width: "100px"}}/><br></br>
                    <SideArrows />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Testimonials
