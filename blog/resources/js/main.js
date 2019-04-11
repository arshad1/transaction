import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
//import { connect } from 'react-redux';

import {Constants} from './Store/Actions';
import store from './Store'
import App from './chatApp';
store.subscribe(txn =>{
   
    localStorage.setItem(Constants.TOKEN, store.getState().authReducer.token);
    localStorage.setItem(Constants.TOKEN_EXPIRY, store.getState().authReducer.expires_in);
    localStorage.setItem(Constants.REFRESH_TOKEN, store.getState().authReducer.refresh_token);
}
 //
);
const chatApp =
    (
        <Provider store={store} >
        <BrowserRouter>
         <App />
        </BrowserRouter>
        </Provider>
    );


if (document.getElementById('chatAppRoot')) {
    ReactDOM.render(chatApp, document.getElementById('chatAppRoot'));
}
