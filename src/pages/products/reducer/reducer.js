export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newState = state.cart;
      const findItem = newState.find((i) => i.id === action.idShoe);
      if (findItem !== null && findItem !== undefined) {
        findItem.quantity += 1;
      } else {
        newState.push({ id: action.idShoe, quantity: 1 });
      }
      return { ...state, cart: newState };
    }
    case "REMOVE_ITEM_CART": {
      let newState = state.cart;
      newState = newState.filter((i) => i.id !== action.idShoe);
      return { ...state, cart: newState };
    }
  }
};
