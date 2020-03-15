
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import succulentReducer from './succulentReducer';

const rootReducer = combineReducers({
  succulentReducer
});

let enhancers = [];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
};

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk),
    ...enhancers
  )
);

export default store;