import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import TodoReducer from './reducer/todo';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const reducers = combineReducers({
    todo: TodoReducer
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

export default store;