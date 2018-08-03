import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers/index'

import App from './components/app';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/app.css';


const faceIdApp = combineReducers(Reducer);
const store = createStore(
    faceIdApp,
    applyMiddleware(thunk)
 )

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>, document.querySelector('#root'));