import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = ({ toggleModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>FOO-Quiz</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
              toggleModal ?
                <NavItem>
                  <NavLink onClick={toggleModal} href="#">Create Quiz</NavLink>
                </NavItem>
                : null
            }
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Help</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;