import React, { Component } from 'react';
import Jumbotron from '../components/Boxes/Jumbotron/Jumbotron';
import Container from '../components/Boxes/Container';
import Row from '../components/Boxes/Row';
import Column from '../components/Boxes/Column';
import Card from '../components/Boxes/Card/Card'
import { getAllDecks, removeDeck, saveDeck } from '../utils/API';
import { StickyContainer } from 'react-sticky';
// import { get } from 'mongoose';

class Saved extends Component {
    state = {
        DeckLists: [],
        cardList: []
    };

    componentDidMount() {
        this.handleGetDecks();
    }

    handleGetDecks = () => {
        getAllDecks()
            .then(({ data: DeckLists }) => {
                this.setState({ DeckLists });
                console.log(this.state.DeckLists);
            })
            .catch(err => console.log(err));
    };

    handleRemoveDeck = deckID => {
        removeDeck(deckID)
            .then(this.handleGetDecks)
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
                <StickyContainer>
                    <Jumbotron
                        fluid
                        bg={'dark'}
                        color={'light'}
                        pageTitle={'Viewing Saved Decks'}
                    />
                    <Container className="pageBod">
                        <Row>
                            {!this.state.DeckLists.length ? (
                                <h2 className="text-center">No saved cards, yet...</h2>
                            ) : (
                                    this.state.DeckLists.map(deck => {
                                        return (
                                            <Column key={deck._id} xs={3} md={2}>
                                                <Card
                                                    image={deck.deckCMDR.cardPic ? deck.deckCMDR.cardPic : undefined}
                                                >
                                                    <h2>{deck.deckName}</h2>
                                                    <button
                                                        onClick={() => this.handleRemoveDeck(deck.deckID)}
                                                        className="btn btn-primary btn-sm">
                                                        Remove Deck
                                                    </button>
                                                </Card>
                                            </Column>
                                        );
                                    })
                                )}
                        </Row>
                    </Container>
                </StickyContainer>
            </>
        );
    }
}

export default Saved;
