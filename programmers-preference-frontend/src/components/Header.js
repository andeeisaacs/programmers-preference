import React, { useState } from 'react';
import { Jumbotron, Container, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


 

const Header = (props) => {
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const toggle = () => setDropdownOpen(!dropdownOpen);
   
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Programmers Preference</h1>
          <p className="lead">#1 place for programmer's to find their preference!</p>
        </Container>
         <Nav>
       <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Menu
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Select a link below</DropdownItem>
            <DropdownItem href="/">See all Programmers</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/newprogrammer">Create a programmer</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
      </Jumbotron>
    </div>
  );
};

export default Header;