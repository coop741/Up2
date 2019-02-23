import {createStore} from 'redux';
import * as actions from './actions';

const defaultState = {
    count: 0
};

const unknownAction = {
    type: 'unknown'
};

//Defines how the action calls will change the store's state
const reducer = (state = defaultState, action = unknownAction) => {
    switch (action.type) {
        case actions.INCREMENT:
            return { ...state, count: state.count + 1};
        case    actions.DECREMENT:
            return { ...state, count: state.count - 1};
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;