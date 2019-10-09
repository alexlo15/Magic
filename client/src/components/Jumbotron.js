import React from 'react';
import Container from './Container';
import Row from './Row';
import Column from './Column';
import { NavLink } from 'react-router-dom';

const Jumbotron = props => {
  return (
    <div
      className={`
        jumbotron
        ${props.fluid ? 'jumbotron-fluid' : ''}
        bg-${props.bg || 'default'}
        text-${props.color || 'dark'}
        text-center
      `}>
      <Container>
        <Row helper={'justify-content-around'}>
          <Column>
            <h1>{props.pageTitle}</h1>
          </Column>
        </Row>
        <Row helper={'justify-content-around'}>
          <Column md={3}>
            <NavLink to="/search" className="btn btn-info btn-lg">
              Search
            </NavLink>
          </Column>
          <Column md={3}>
            <NavLink to="/saved" className="btn btn-warning btn-lg">
              Saved
            </NavLink>
          </Column>
          <Column md={3}>
            <NavLink to="/commander" className="btn btn-danger btn-lg">
              Commander
            </NavLink>
          </Column>
          <Column md={3}>
            <NavLink to="/quiz" className="btn btn-light btn-lg">
              Quiz
            </NavLink>
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export default Jumbotron;
