import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { pokemonsReducer } from './Reducers/pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { featuring, logger } from './middlewares'

const REDUX_TOOLKIT = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const composeEnhancers = compose(REDUX_TOOLKIT, applyMiddleware(logger, featuring))
const composeEnhancers = compose(REDUX_TOOLKIT, applyMiddleware(logger))

const store = createStore(pokemonsReducer, composeEnhancers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
