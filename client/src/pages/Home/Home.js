import React, { Image, Component } from 'react';
import Jumbotron from '../../components/Boxes/Jumbotron/Jumbotron';
import Container from '../../components/Boxes/Container';
import Row from '../../components/Boxes/Row';
import Column from '../../components/Boxes/Column';
import Card from '../../components/Boxes/Card/Card';
import { mtgCardSearch, getSavedCards, saveCard } from '../../utils/API';
import Commander from "../../components/Commander";
import { SocialIcon } from 'react-social-icons';
import "./Home.css";

class Home extends Component {

    render() {
        return (
            <div className="pagebody">
                <Jumbotron
                    fluid
                    bg={'dark'}
                    color={'light'}
                    pageTitle={'Search For Cards'}
                />
                <Container>
                    <Row>
                        <Column xs={12} md={8} lg={8}>
                            <Row>
                                <Column xs={12} md={12} lg={12}>
                                    <Card>
                                        <h2>Welcome to my MTG app!An open place to immerse yourself in EDH.</h2>
                                    </Card>
                                </Column>
                            </Row>
                            <Row>
                                <Commander />
                            </Row>
                        </Column>
                        <Column xs={12} md={4} lg={4}>
                            <Row>
                                <Column xs={12} md={12} lg={12}>
                                    <img id="logoPic" src={require("./logo.png")} />
                                </Column>
                            </Row>
                            <Row>
                                <Column xs={12} md={12} lg={12}>
                                    <div className="iconHeader">
                                        <Row>
                                            <Card title={"Thank you for checking out my page!"}>

                                                <p>Please checkout my other projects and pages.</p>
                                                <SocialIcon id="mediaIcons" target="_blank" url="https://alexlo15.github.io" />
                                                <SocialIcon id="mediaIcons" target="_blank" url="https://www.linkedin.com/in/alexander-lo-154a33188/" />
                                                <SocialIcon id="mediaIcons" target="_blank" url="https://docs.google.com/document/d/1eJDtlLm0e73J-ZIg6oOMsPVtNewKBPIrFBTJO02Wbkg/edit?usp=sharing" />
                                            </Card>
                                        </Row>
                                    </div>
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    }

};

export default Home;