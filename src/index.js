// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme
// import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import './index.css';

// Create a default MUI theme
const theme = createTheme(); // Create a default theme, you can customize it if needed

// Configure the Redux store
const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with Provider and ThemeProvider
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}> {/* Wrap App with ThemeProvider */}
                <App />
        </ThemeProvider>
    </Provider>
);
