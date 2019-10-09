import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Card from '../components/Card';
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
                        <Column xs={12} md={4}>
                            <Card title={"Search for your General"}>
                                <form onSubmit={this.handleEDHSearch}>
                                    <button type="submit" className="btn btn-block btn-dark mt-2">
                                        Search!
                            </button>
                                </form>
                            </Card>
                        </Column>
                        <Column xs={12} md={8}>
                            <Row>
                                <Card title={this.state.cardName} image={this.state.cardPic} >
                                    <p><strong>ID: </strong>{this.state.cardID}</p>
                                    <p><strong>Colors: </strong>{this.state.colorIdentity}</p>
                                    <p><strong>CMC: </strong>{this.state.cardCMC}</p>
                                    <p><strong>Links: </strong>{this.state.cardURI}</p>
                                </Card>


                            </Row>
                        </Column>
                    </Row>
                </Container>
            </>
        );
    }



}

export default Commander;