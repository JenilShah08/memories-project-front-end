// import react from 'react';
import ReactDOM from 'react-dom/client'; // Notice the updated import
import { Provider } from 'react-redux';
import {applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import reducers from './reducers';

import App from './App';
import './index.css';

// Configure the store
const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
<App />
</Provider>

);