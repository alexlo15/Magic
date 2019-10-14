import React from 'react';
import Container from '../Container';
import Row from '../Row';
import Column from '../Column';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import "./Jumbotron.css";

const Jumbotron = props => {
  return (
    <div
      className={`
        jumbotron
      header
      `}>
      <Container>
        <Row helper={'justify-content-around'} className="top-container">
          <Column>
            <h1>{props.pageTitle}</h1>
          </Column>
        </Row>
        <Row helper={'justify-content-around'} className="page-header" id="myHeader">
          <Column md={2}>
            <NavLink to="/search" className="btn btn-lg bord">
              Search
            </NavLink>
          </Column>
          <Column md={2}>
            <NavLink to="/saved" className="btn btn-lg bord">
              Decks
            </NavLink>
          </Column>
          <Column md={2}>
            <NavLink to="/commander" className="btn btn-lg bord">
              Generals
            </NavLink>
          </Column>
          <Column md={2}>
            <NavLink to="/quiz" className="btn btn-lg">
              Quiz
            </NavLink>
          </Column>
          <Column md={2}>
            <NavLink to="/results" className="btn btn-lg">
              Results
            </NavLink>
          </Column>
        </Row>
      </Container>
      <div className="header" id="myHeader">
        <Row><Column>
          <SocialIcon id="mediaIcons" target="_blank" url="https://alexlo15.github.io" />
        </Column></Row>
        <Row><Column>
          <SocialIcon id="mediaIcons" target="_blank" url="https://www.linkedin.com/in/alexander-lo-154a33188/" />
        </Column></Row>
        <Row><Column>
          <SocialIcon id="mediaIcons" target="_blank" url="https://docs.google.com/document/d/1eJDtlLm0e73J-ZIg6oOMsPVtNewKBPIrFBTJO02Wbkg/edit?usp=sharing" />
        </Column></Row>
      </div>
    </div>
  );
};

export default Jumbotron;
