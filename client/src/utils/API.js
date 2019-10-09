import axios from 'axios';

export const saveBook = bookData => {
  return axios.post('/api/books', bookData);
};

export const getSavedBooks = () => {
  return axios.get('/api/books');
};

export const removeBook = bookId => {
  return axios.delete(`/api/books/${bookId}`);
};

export const searchGoogleBooks = query => {
  return axios.get('https://www.googleapis.com/books/v1/volumes', {
    params: {
      q: query
    }
  });
};

export const mtgSearch = () => {
  return axios.get("https://api.scryfall.com/cards/random?q=is%3Acommander")

};



export default {
  saveBook,
  getSavedBooks,
  removeBook,
  searchGoogleBooks,
  mtgSearch

};
