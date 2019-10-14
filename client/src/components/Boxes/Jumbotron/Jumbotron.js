import React, { Image } from 'react';
import Container from '../Container';
import Row from '../Row';
import Column from '../Column';
import { NavLink } from 'react-router-dom';
import { Sticky } from 'react-sticky';
import "./Jumbotron.css";

const Jumbotron = props => {
  return (
    <Sticky>
      {({
        style,

        // the following are also available but unused in this example
        isSticky,
        wasSticky,
        distanceFromTop,
        distanceFromBottom,
        calculatedHeight
      }) => (
          <header style={style}>
            <div className={`jumbotron header`}>
              <Container>
                {/* <Row helper={'justify-content-around'} className="top-container">
                      <Column>
                        <h1>{props.pageTitle}</h1>
                       </Column>
                      </Row> */}


                <Row helper={'justify-content-around'} className="page-header" id="myHeader">
                  <Column md={2}>
                    <NavLink to="/" className="btn btn-lg">
                      <img id="logo" src={require("./logobutton.png")} />
                    </NavLink>
                  </Column>
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
            </div>
          </header>
        )}
    </Sticky>
  );
};

export default Jumbotron;
