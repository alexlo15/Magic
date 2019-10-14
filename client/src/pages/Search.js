import React, { Component } from 'react';
import Jumbotron from '../components/Boxes/Jumbotron';
import Container from '../components/Boxes/Container';
import Row from '../components/Boxes/Row';
import Column from '../components/Boxes/Column';
import Card from '../components/Boxes/Card';
import { searchGoogleBooks, saveBook, getSavedBooks, mtgCardSearch, mtgSearch, getSavedCards } from '../utils/API';

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
        console.log(res.data);
        const { items } = res.data;
        this.setState({ error: null });

        const cardListCleaned = items.map(card => {
          return {
            cardPic: card.image_uris.normal,
            cardID: card.id,
            cardName: card.name,
            cardURI: card.uri,
            cardCMC: card.mana_cost,
            colorIdentity: card.color_identity,
          };
        });

        return this.setState({ cardList: cardListCleaned, searchTerm: '' });
      })


    // searchGoogleBooks(this.state.searchTerm)
    //   .then(res => {
    //     const { items } = res.data;
    //     this.setState({ error: null });

    //     const bookListCleaned = items.map(book => {
    //       return {
    //         bookId: book.id,
    //         title: book.volumeInfo.title,
    //         authors: book.volumeInfo.authors,
    //         description: book.volumeInfo.description,
    //         image: book.volumeInfo.imageLinks
    //           ? book.volumeInfo.imageLinks.thumbnail
    //           : ''
    //       };
    //     });

    //     return this.setState({ bookList: bookListCleaned, searchTerm: '' });
    //   })
      //  //////////////////////////////////////
      .then(this.retrieveSavedBooks)
      .catch(err => this.setState({ error: err }));
  };

  retrieveSavedBooks = () => {
    getSavedBooks()
      .then(res => {
        const savedBookIds = res.data.map(book => book.bookId);
        this.setState({ savedBookIds });
      })
      .catch(err => this.setState({ error: err }));
  };

  getSavedCards = () => {
    getSavedCards()
      .then(res => {
        const savedCardIds = res.data.map(card => card.cardID);
        this.setState({ savedCardIds });
      })
      .catch(err => this.setState({ error: err }));

  };

  handleBookSaveBook = bookId => {
    const book = this.state.bookList.find(book => book.bookId === bookId);
    saveBook(book)
      .then(() => {
        const savedBookIds = [...this.state.savedBookIds, bookId];
        this.setState({ savedBookIds });
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
              <Card title={'Search for a book'}>
                <form onSubmit={this.handleFormSubmit}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a book"
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
                    Search For Books
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
                        <Column key={card.id} md={4}>
                          <Card
                            title={card.name}
                            image={card.cardPic ? card.cardPic : undefined}>
                            {/* <p>{book.description}</p> */}

                            <button
                              disabled={
                                this.state.savedCardIds.includes(card.cardID)
                                  ? true
                                  : undefined
                              }
                              className={'btn btn-success btn-sm'}
                              onClick={() =>
                                this.handleBookSaveBook(card.cardID)
                              }>
                              Save Book
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
