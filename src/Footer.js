import React from "react";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactComponent as Mail} from './assets/Group 35688.svg';
import {ReactComponent as Call} from './assets/Group 35689.svg';
import {ReactComponent as Address} from './assets/Path 36465.svg';
import {ReactComponent as Facebook} from './assets/Group 34322.svg';
import {ReactComponent as Background} from './assets/Path 37456.svg';
function Footer() {
  return (
    <div className="main-footer" style={{backgroundImage:{Background}}}>
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
              <p>Lorem Finaldream rure dolor in reprehenderit in voluptate<br></br> velit esse cillum dolore e uis nostrud exercitation isi<br></br> ut aliquip ex ea commodo consequat.</p>
            <Facebook />
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Our Services</h4>
            <ui className="list-unstyled">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Cloud Technologies</li>
              <li>UI/UX Designs</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Our Links</h4>
            <ui className="list-unstyled">
              <li>Terms and Conditions</li>
              <li>Privcy Policy</li>
              <li>imprint</li>
            </ui>
          </div>
          {/* Column4 */}
          <div className="col">
            <h4>Contact Us</h4>
            <ui className="list-unstyled">
              <li><Address /> Al. Dummyodl 124/23 floor 123<br></br> Banswara Street, 02-577 India.</li>
              <li><Call /> 00 1800 245 453</li>
              <li><Mail /> hello@inkyy.com</li>
            </ui>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;