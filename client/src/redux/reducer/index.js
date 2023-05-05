import {
    ADD_TO_FAVORITES,
    REMOVE_FAVORITE,
    FILTER_CARDS,
    ORDER_CARDS,
    RESET,
  } from "../actions";
  
  let initialState = {characters: [], favorites: []};
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_FAVORITES:
        // const added = [...state.characters, action.payload];
        // return {
        //   ...state,
        //   favorites: [...added],
        //   characters: [...added],
        // };
        return {
          ...state,
          myFavorites: action.payload,
          allCharacters: action.payload,
        };
  
      case REMOVE_FAVORITE:
        // const remove = state.characters.filter(
        //   (characters) => characters.id !== action.payload
        // );
        return {
          ...state,
          favorites: [...remove],
          characters: [...remove],
        };
  
      case FILTER_CARDS:
        return {
          ...state,
          favorites: state.characters.filter(
            (character) => character.gender === action.payload
          ),
        };
      case ORDER_CARDS:
        let ordenados;
        if (action.payload === "Ascendente") {
          ordenados = state.favorites.sort((a, b) => (a.id > b.id ? 1 : -1));
        } else {
          ordenados = state.favorites.sort((a, b) => (b.id > a.id ? 1 : -1));
        }
        return {
          ...state,
          favorites: [...ordenados],
        };
  
      case RESET:
        return {
          ...state,
          favorites: state.characters,
        };
  
      default:
        return state;
    }
  }
  
  export default rootReducer;
  