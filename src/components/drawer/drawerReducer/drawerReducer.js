export const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM_CART": {
      const newState = state.cart;
      newState.filter((i) => i.id !== action.idShoe);
      return { ...state, cart: newState };
    }
  }
};
