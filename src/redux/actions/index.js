export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";
export const RESET = "RESET";

export function addFavorite(character) {
  return {
    type: "ADD_TO_FAVORITES",
    payload: character,
  };
}

export function removeFavorite(id) {
  return {
    type: "REMOVE_FAVORITE",
    payload: id,
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
