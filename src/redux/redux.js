const INITIAL_STATE = {
  adverts: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ADVERTS":
      return { ...state, adverts: action.payload };
    case "GET_ADVERT":
      return { ...state, adverts: action.payload };
    default:
      return state;
  }
};
