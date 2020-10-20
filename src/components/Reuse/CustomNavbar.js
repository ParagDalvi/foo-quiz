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

const CustomNavbar = ({ toggleModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const history = useHistory();

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand onClick={() => history.push('/')}>FOO-Quiz</NavbarBrand>
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