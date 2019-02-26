import { createStore } from "redux";
import * as actions from "./actions";

const defaultState = {
  postID: ""
};

//Defines how the action calls will change the store's state
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SET_EVENT_ID:
      return { ...state, eventID: action.payload };
    default:
      return state;
  }
};

export function setEventID(_id) {
  return {
    type: actions.SET_EVENT_ID,
    payload: _id
  };
}

const store = createStore(reducer);

export default store;
