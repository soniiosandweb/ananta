import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assests/images/logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary px-2">
          <Container fluid>
            <Navbar.Brand href="/">
                <img src={logo} alt="Logo" className='w-28' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#floor-plan">Floor Plan</Nav.Link>
                <Nav.Link href="#smart-living">Smart Living</Nav.Link>
                <Nav.Link href="#amenities">Amenities</Nav.Link>
                <Nav.Link href="#connectivity">Connectivity</Nav.Link>
                <Nav.Link href="#gallery">Gallery</Nav.Link>
                <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="tel:+919888877182"><FontAwesomeIcon icon={faPhone} /> +91 9888877182</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header