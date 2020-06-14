import React from 'react';
import { createStore,  applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import appReducer from './app/AppReducer';

const enhancers = [
    applyMiddleware(thunk)
];
var initialState = {
    items: [{
        url: 'test Url',
        templateName: 'Template Name',
        version: '1.0.0',
        deployedAt: Date()
    }],
    count: 1,
    pageNum: 1,
    pageSize: 15,
    isFetchingDeployment: false,
    isDeleting: {},
    isAdding: false,
    templates: []
};
const store = createStore(appReducer, initialState, compose(...enhancers));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
