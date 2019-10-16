import React, { Component } from 'react';
import Jumbotron from '../components/Boxes/Jumbotron/Jumbotron';
import Container from '../components/Boxes/Container';
import Row from '../components/Boxes/Row';
import Column from '../components/Boxes/Column';
import Card from '../components/Boxes/Card/Card';
import AdSearch from '../components/AdSearch';
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
            isCMDR: false,
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
      <div className="pagebody">
        <Jumbotron
          fluid
          bg={'dark'}
          color={'light'}
          pageTitle={'Search For Cards'}
        />
        <Container>
          <Row>
            <Column xs={12} md={12} lg={12}>
              <Card>
                <form onSubmit={this.handleFormSubmit}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a keyword to search"
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
              <AdSearch />
            </Column>
            <Column xs={12} md={12} lg={12}>
              <Row>
                {!this.state.cardList.length ? (
                  <div></div>
                ) : (
                    this.state.cardList.map(card => {
                      return (
                        <Column key={card.cardID} xs={2} md={2} lg={2}>
                          <div className="img-wrap">
                            <Card
                              className="img-img"
                              title={card.cardName}
                              image={card.cardPic ? card.cardPic : undefined}>
                              <div className="img-description">
                                <p>{card.cardName}</p>
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
                              </div>
                            </Card>
                          </div>
                        </Column>
                      );
                    })
                  )}
              </Row>
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
