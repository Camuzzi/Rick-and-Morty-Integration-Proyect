export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";
export const RESET = "RESET";

export function addFavorite(character) {
  // return {
  //   type: "ADD_TO_FAVORITES",
  //   payload: character,
  // };
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({data}) => {
      // aqui recibo el array de favoritos del backend
      return dispatch({
        type: "ADD_TO_FAVORITES",
        payload: data,
      });
    });
  };
}

export function removeFavorite(id) {
  // return {
  //   type: "REMOVE_FAVORITE",
  //   payload: id,
  // };
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({data}) => {
      return dispatch({
        type: "REMOVE_FAVORITE",
        payload: data,
      });
    });
  };
}

export function filterCards(gender) {
  return {
    type: "FILTER_CARDS",
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: "ORDER_CARDS",
    payload: order,
  };
}

export function reset() {
  return {
    type: "RESET",
  };
}
