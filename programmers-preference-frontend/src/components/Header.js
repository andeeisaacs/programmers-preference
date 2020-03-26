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
          <p className="lead">Tinder, but for dope programmers</p>
        </Container>
         <Nav>
       <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Select a link below</DropdownItem>
            <DropdownItem>See all Programmers</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Create a programmer</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
      </Jumbotron>
    </div>
  );
};

export default Header;