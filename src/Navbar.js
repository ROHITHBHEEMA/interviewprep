import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar,Nav} from 'react-bootstrap';


var d = new Date();
var n = d.getHours();
var time;
if(n<12 && n>4){
    time="Good Morning";
}
else if(n>=12 && n<17){
    time="Good Afternoon";
}
else{
    time="Good Evening";
}

function navbar() {
    return (
        <div className="marg">
            <Navbar collapseOnSelect expand="lg" bg="" variant="light">
            <Navbar.Brand href="/">Interview Prep | {time}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link className="active" href="/about">About Us</Nav.Link>
                <Nav.Link  href="/contact">Contact Us</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Nav>
                <Nav.Link href="/profile">Profile</Nav.Link>
                {/* <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <hr></hr>
        </div>
    )
}

export default navbar
