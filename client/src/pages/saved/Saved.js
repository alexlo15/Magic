import React, { Component } from 'react';
import Jumbotron from '../../components/Boxes/Jumbotron/Jumbotron';
import Container from '../../components/Boxes/Container';
import Row from '../../components/Boxes/Row';
import Column from '../../components/Boxes/Column';
import Card from '../../components/Boxes/Card/Card';
import { getSavedCards, removeCard, cardSearchByID } from '../../utils/API';
import { StickyContainer } from 'react-sticky';
import "./Saved.css";
// import { get } from 'mongoose';

class Saved extends Component {
  state = {
    // bookList: [],
    deckName: [],
    cardList: [],
    CommanderID: "",
    Commander: [],
    savedCardIds: [],
    deckIsSaved: false,
    error: null,
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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

  handleCMDR = (cardID) => {
    this.setState({ CommanderID: { cardID } })
    console.log(this.state.CommanderID)
  };

  getMyLeader = (aCard) => {
    cardSearchByID(aCard)
      .then(res => {

        console.log(res.data)

      })
  }



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
          />
          <Container className="pageBod">
            <Row>
              <Column xs={12} md={6} lg={6}>
                <Card>
                  <form onSubmit={this.handleFormSubmit}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter a deck name to save"
                      onChange={this.handleInputChange}
                      value={this.state.deckName}
                      name="deckName"
                    />
                    {this.state.error && !this.state.deckName.length && (
                      <div className="alert alert-danger my-2">
                        {this.state.error}
                      </div>
                    )}
                    <button type="submit" className="btn btn-block btn-dark mt-2">
                      Save Deck
                  </button>
                  </form>
                </Card>
              </Column>
            </Row>
            <Row>
              {!this.state.cardList.length ? (
                <h2 className="text-center">No saved cards, yet...</h2>
              ) : (
                  this.state.cardList.map(card => {
                    return (
                      <Column key={card._id} xs={3} md={2}>
                        <Card
                          title={card.cardName}
                          image={card.cardPic ? card.cardPic : undefined}
                        >
                          <button
                            onClick={() => this.handleRemoveCard(card.cardID)}
                            className="btn btn-primary btn-sm">
                            Remove Card
                          </button>
                          <button
                            onClick={() => this.handleCMDR(card.cardID)}
                            className="btn btn-primary btn-sm">
                            Make Commander
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
