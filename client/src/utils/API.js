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
export const cmdrColor = (color) => {
  return axios.get("https://api.scryfall.com/cards/search?order=edhrec&q=c%3A" + color)
};
// card search
export const mtgCardSearch = (query) => {
  return axios.get("https://api.scryfall.com/cards/search?order=edhrec&q="+query)
};
// mycommander Search
export const cardSearchByID = (ID) => {
return axios.get("https://api.scryfall.com/cards/"+ID);
};
 

// card routes
export const getSavedCards = () => {
  return axios.get('/api/cardlist');
};
// save card
export const saveCard = cardData => {
  return axios.post('/api/cardlist', cardData);
};
export const removeCard = cardId => {
  return axios.delete(`/api/cardlist/${cardId}`);
};

// deck routes
export const saveDeck = deckData => {
  return axios.post('/api/decklist', deckData);
};
export const removeDeck = deckID => {
  return axios.delete(`/api/decklist/${deckID}`);
};
export const getAllDecks = () => {
  return axios.get('/api/decklist');
}



export default {
  // scryfall
  mtgSearch,
  mtgCardSearch,
  cardSearchByID,
  cmdrColor,
// users
  getAllUsers,
  saveUser,
  getGuilds,
  // cards
  getSavedCards,
  saveCard,
  removeCard,
  // decks
  saveDeck,
  removeDeck,
  getAllDecks,
};
