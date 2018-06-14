import { combineReducers } from "redux";
import { GET_ADVERTS, GET_ADVERT } from "../actions/actions";
const INITIAL_STATE = {
  adverts: [],
  advert: {}
};

function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ADVERTS:
      return { ...state, adverts: action.payload };
    case GET_ADVERT:
      return { advert: action.payload };
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
});

export default todoApp;
