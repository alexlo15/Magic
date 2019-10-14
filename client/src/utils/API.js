import axios from 'axios';

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
export const mtgSearch = () => {
  return axios.get("https://api.scryfall.com/cards/random?q=is%3Acommander")
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
   mtgSearch,
  mtgCardSearch,
  getAllUsers,
  saveUser,
  getGuilds,
  getSavedCards,
  saveCard,
  removeCard,

};
