import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

// Reducers
import { reducers } from './reducers';

export default createStore(combineReducers(reducers), applyMiddleware(thunk));
