import React, { Component } from 'react';
import Row from './Boxes/Row';
import Column from './Boxes/Column';
import Card from './Boxes/Card/Card';
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

    componentDidMount() {
        this.handleEDHSearch();
    }
    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    handleEDHSearch = (event) => {
        // event.preventDefault();
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

    // handleFormSubmit = event => {
    //     event.preventDefault();

    //     if (this.state.userName === '') {
    //         return this.setState({ error: 'Please enter your name.' });
    //     }

    //     this.startQuiz();

    // };



    render() {
        return (
            <Row>
                <Column xs={12} md={4} lg={4}>
                    <Card title={"Search for a random General, or if you took the quiz"}>
                        <form onSubmit={this.handleEDHSearch}>
                            <button type="submit" className="btn btn-block btn-dark mt-2">
                                Hit me!
                            </button>
                        </form>
                        <p><strong>Links: </strong><a href={this.state.cardURI} target="_blank">Scryfall</a></p>
                    </Card>
                </Column>
                <Column xs={12} md={8} lg={8}>
                    <Card image={this.state.cardPic} >
                    </Card>
                </Column>

            </Row>
        );
    }



}

export default Commander;