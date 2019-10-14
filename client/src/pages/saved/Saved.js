import React, { Component } from 'react';
import Jumbotron from '../../components/Boxes/Jumbotron/Jumbotron';
import Container from '../../components/Boxes/Container';
import Row from '../../components/Boxes/Row';
import Column from '../../components/Boxes/Column';
import Card from '../../components/Boxes/Card/Card';
import { getSavedCards, removeCard } from '../../utils/API';
import { StickyContainer } from 'react-sticky';
import "./Saved.css";
// import { get } from 'mongoose';

class Saved extends Component {
  state = {
    bookList: [],
    cardList: []
  };

  componentDidMount() {
    this.handleGetCards();
  }

  handleGetCards = () => {
    getSavedCards()
      .then(({ data: cardList }) => {
        this.setState({ cardList });
        console.log(this.state.cardList);
      })
      .catch(err => console.log(err));
  };

  handleRemoveCard = cardID => {
    removeCard(cardID)
      .then(this.handleGetCards)
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
              {!this.state.cardList.length ? (
                <h2 className="text-center">No saved cards, yet...</h2>
              ) : (
                  this.state.cardList.map(card => {
                    return (
                      <Column key={card._id} md={2}>
                        <Card
                          title={card.cardName}
                          image={card.cardPic ? card.cardPic : undefined}
                        >
                          <button
                            onClick={() => this.handleRemoveCard(card.cardID)}
                            className="btn btn-primary btn-sm">
                            Remove Card
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
