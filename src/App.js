import './App.css';
import { Button, Nav, Navbar, NavbarBrand, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Technologies from './Technologies';
import CaseStudies from './CaseStudies';
import Aboutus from'./Aboutus';
import Contactus from './Contactus';
import WorkFlow from './workFlow';
import OurServices from './ourServices';
import Testimonials from './Testimonials';
import Footer from './Footer';
function App() {
  return (
    <>
  <div className="header">
    <Navbar Navbar bg="primary" variant="white">
      <div className="container">
        <NavbarBrand href="#" style={{color:"white"}}>LOGO</NavbarBrand>
        <Nav className="ml-auto justify-content-end">
          <NavLink href="#AboutUsLink" style={{color:"white"}}>About</NavLink>
          <NavLink href="#servicesLink" style={{color:"white"}}>Services</NavLink>
          <NavLink href="#CaseStudiesLink" style={{color:"white"}}>Case studies</NavLink>
          <NavLink href="#TestimonialsLink" style={{color:"white"}}>Testimonials</NavLink>
          <NavLink href="#FooterLink" style={{color:"white"}}>Contact</NavLink>
          <NavLink href="#"><Button>Login</Button></NavLink>
        </Nav>
      </div>
    </Navbar> 
  </div>

  <div className="firstpage">
      <h2>Web Design</h2>
      <h2>Web Development</h2>
      <h2>by SB</h2>
  </div>
  <div className="AboutUs" id="AboutUsLink">
    <Aboutus />
  </div>
  <div className="ourServices" id="servicesLink">
    <OurServices />
  </div>
  <div className="workFlow" id ="workFlowLink">
    <WorkFlow />
  </div>
  <div className="technologies">
    <h2>Core Technologies</h2>
    <Technologies />
  </div>
  <div className="belovedCustomers" id="TestimonialsLink">
    <Testimonials />
  </div>
  <div className="CaseStudies" id="CaseStudiesLink">
    <CaseStudies />
  </div>
  <div className="Contactus">
    <Contactus />
  </div>
  <div id="FooterLink">
    <Footer />
  </div>
  
      </>
  );
}

export default App;
