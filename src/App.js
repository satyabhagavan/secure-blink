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
function App() {
  return (
    <>
  <div className="header">
    <Navbar Navbar bg="primary" variant="white">
      <div className="container">
        <NavbarBrand href="#" style={{color:"white"}}>LOGO</NavbarBrand>
        <Nav className="ml-auto justify-content-end">
          <NavLink href="#" style={{color:"white"}}>About</NavLink>
          <NavLink href="#" style={{color:"white"}}>Services</NavLink>
          <NavLink href="#" style={{color:"white"}}>Case studies</NavLink>
          <NavLink href="#" style={{color:"white"}}>Testimonials</NavLink>
          <NavLink href="#" style={{color:"white"}}>Contact</NavLink>
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
  <div className="AboutUs">
    <Aboutus />
  </div>
  <div className="ourServices">
    <OurServices />
  </div>
  <div className="workFlow">
    <WorkFlow />
  </div>
  <div className="technologies">
    <h2>Core Technologies</h2>
    <Technologies />
  </div>
  <div className="belovedCustomers">
    <Testimonials />
  </div>
  <div className="CaseStudies">
    <CaseStudies />
  </div>
  <div className="Contactus">
    <Contactus />
  </div>
      </>
  );
}

export default App;
