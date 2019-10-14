import React, { Component } from 'react';
import Jumbotron from '../components/Boxes/Jumbotron';
import Container from '../components/Boxes/Container';
import Row from '../components/Boxes/Row';
import Column from '../components/Boxes/Column';
import Card from '../components/Boxes/Card';
import { mtgCardSearch, getSavedCards, saveCard } from '../utils/API';

class Search extends Component {
  state = {
    searchTerm: '',
    cardList: [],
    bookList: [],
    savedBookIds: [],
    savedCardIds: [],
    error: null
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.searchTerm === '') {
      return this.setState({ error: 'Please put in a keyword.' });
    }

    mtgCardSearch(this.state.searchTerm)
      .then(res => {
        // console.log(res.data.data);
        const card = res.data.data;
        console.log(card)
        this.setState({ error: null });



        const cardListCleaned = card.map(card => {
          return {
            cardPic: card.image_uris.normal,
            cardID: card.id,
            cardName: card.name,
            cardURI: card.uri,
            cardCMC: card.mana_cost,
            colorIdentity: card.color_identity,
          };

        });

        console.log(cardListCleaned);
        return (this.setState({ cardList: cardListCleaned, searchTerm: '' }));
      })
      .then(this.retrieveSavedCards)
      .catch(err => this.setState({ error: err }));
  };

  retrieveSavedCards = () => {
    getSavedCards()
      .then(res => {
        const savedCardIds = res.data.map(card => card.cardID);
        this.setState({ savedCardIds });
        console.log(this.state.savedCardIds);
      })
      .catch(err => this.setState({ error: err }));

  };

  handeCardSave = cardID => {
    const card = this.state.cardList.find(card => card.cardID === cardID);
    saveCard(card)
      .then(() => {
        console.log(card);
        const savedCardIds = [...this.state.savedCardIds, cardID];
        this.setState({ savedCardIds: savedCardIds });
        console.log(this.state.savedCardIds)
      })
      .catch(err => this.setState({ error: err }));
  };

  render() {
    return (
      <>
        <Jumbotron
          fluid
          bg={'dark'}
          color={'light'}
          pageTitle={'Search For Books'}
        />
        <Container>
          <Row>
            <Column xs={12} md={4}>
              <Card title={'Search for cards'}>
                <form onSubmit={this.handleFormSubmit}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a keyword"
                    onChange={this.handleInputChange}
                    value={this.state.searchTerm}
                    name="searchTerm"
                  />
                  {this.state.error && !this.state.searchTerm.length && (
                    <div className="alert alert-danger my-2">
                      {this.state.error}
                    </div>
                  )}
                  <button type="submit" className="btn btn-block btn-dark mt-2">
                    Lets go
                  </button>
                </form>
              </Card>
            </Column>
            <Column xs={12} md={8}>
              <Row>
                {!this.state.cardList.length ? (
                  <h2 className="text-center">Search for cards to begin</h2>
                ) : (
                    this.state.cardList.map(card => {
                      return (
                        <Column key={card.cardID} md={4}>
                          <Card
                            title={card.cardName}
                            image={card.cardPic ? card.cardPic : undefined}>

                            <button
                              disabled={
                                this.state.savedCardIds.includes(card.cardID)
                                  ? true
                                  : undefined
                              }
                              className={'btn btn-success btn-sm'}
                              onClick={() =>
                                this.handeCardSave(card.cardID)
                              }>
                              Add to deck
                          </button>
                          </Card>
                        </Column>
                      );
                    })
                  )}
              </Row>
            </Column>
          </Row>
        </Container>
      </>
    );
  }
}

export default Search;
