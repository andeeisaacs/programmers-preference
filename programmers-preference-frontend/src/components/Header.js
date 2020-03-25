import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Programmers Preference</h1>
          <p className="lead">Tinder, but for dope programmers</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;