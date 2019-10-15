import React, { Component } from 'react';
import Jumbotron from '../components/Boxes/Jumbotron/Jumbotron';
import Container from '../components/Boxes/Container';
import Row from '../components/Boxes/Row';
import Column from '../components/Boxes/Column';
import Card from '../components/Boxes/Card/Card';
import { mtgSearch } from "../utils/API"



class Commander extends Component {

    state = {
        cardID: "",
        cardCMC: "",
        cardName: "",
        cardPic: "",
        colorIdentity: "",
        cardURI: "",
        error: null
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleEDHSearch = (event) => {
        event.preventDefault();
        mtgSearch()
            .then(res => {

                const random = res.data;
                console.log(random);
                this.setState({
                    error: null,
                    cardName: random.name,
                    cardID: random.id,
                    cardURI: random.uri,
                    cardCMC: random.mana_cost,
                    colorIdentity: random.color_identity,
                    cardPic: random.image_uris.normal
                });

            })
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.userName === '') {
            return this.setState({ error: 'Please enter your name.' });
        }

        this.startQuiz();

    };



    render() {
        return (
            <>
                    <Jumbotron
                        fluid
                        bg={'dark'}
                        color={'light'}
                        pageTitle={'Search For A Commander!'}
                    />
                    <Container>
                        <Row>
                            <Column xs={12} md={3} lg={3}>
                                <Card title={"Search for a random General, or if you took the quiz"}>
                                    <form onSubmit={this.handleEDHSearch}>
                                        <button type="submit" className="btn btn-block btn-dark mt-2">
                                            Search!
                            </button>
                                    </form>
                                </Card>
                            </Column>
                            <Column xs={12} md={5} lg={5}>
                                <Row>
                                    <Card title={this.state.cardName} image={this.state.cardPic} >
                                    </Card>


                                </Row>
                            </Column>
                            <Column xs={12} md={4} lg={4}>
                                <Card>
                                    <p><strong>Colors: </strong>{this.state.colorIdentity}</p>
                                    <p><strong>CMC: </strong>{this.state.cardCMC}</p>
                                    <p><strong>Links: </strong><a href={this.state.cardURI} target="_blank">Scryfall</a></p>
                                </Card>
                            </Column>
                        </Row>
                    </Container>
            </>
        );
    }



}

export default Commander;