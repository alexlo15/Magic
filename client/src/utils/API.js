import axios from 'axios';

// example book routes
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



// user routes 
export const saveUser = theirResult => {
  return axios.post('/api/quiz', theirResult);
};

export const getAllUsers = () => {
  return axios.get('/api/quiz');
};

export const getGuilds = () => {
  return axios.get("/api/Guild");
}

// commander search
export const mtgSearch = (query) => {
  return axios.get("https://api.scryfall.com/cards/random?q=is%3Acommander+c:" + query)
};

// card routes
export const getSavedCards = () => {
  return axios.get('/api/cardlist');
};
// card search
export const mtgCardSearch = (query) => {
  return axios.get("https://api.scryfall.com/cards/search?order=edhrec&q="+query)
};
// save card
export const saveCard = cardData => {
  return axios.post('/api/cardlist', cardData);
};
export const removeCard = cardId => {
  return axios.delete(`/api/cardlist/${cardId}`);
};




export default {
  saveBook,
  getSavedBooks,
  removeBook,
  searchGoogleBooks,
  mtgSearch,
  mtgCardSearch,
  getAllUsers,
  saveUser,
  getGuilds,
  getSavedCards,
  saveCard,
  removeCard,

};
