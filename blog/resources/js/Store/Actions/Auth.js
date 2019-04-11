import axios from 'axios'

import * as actionTypes from './Constants'

const authStart= () => {
    return {
    type: actionTypes.AUTH_START
};
};

const authSuccess= (resp) => {
    
    return {
    type: actionTypes.AUTH_SUCCESS,resp
};
};

const authError= (resp) => {

    return {
    type: actionTypes.AUTH_FAIL,resp
};
};



export function Authenticate(email,pass){

    return dispatch=>{
        dispatch(authStart());

        const formData  = {
            
                "grant_type": "password",
                "client_id": process.env.MIX_PASSPORT_CLIENT_ID,
                "client_secret": process.env.MIX_PASSPORT_CLIENT_KEY,
                "username": email,
                "password": pass,
                "scope": "*"
              };
        
//console.log("formData=",formData)

        axios.post(actionTypes.AUTH_LOGIN_URL,formData)
        .then(resp=>{
            //console.log(resp.data)
            dispatch(authSuccess(resp.data));
        })
        .catch(err => {
            console.log('Error=',err.response.data.message);
            dispatch(authError(err.response.data.message));
        });
        
    }
}

export function RefreshAuth(refresh_token){

    return dispatch=>{
       // dispatch(authStart());

        const formData  = {
            
                "grant_type": "refresh_token",
                "client_id": process.env.MIX_PASSPORT_CLIENT_ID,
                "client_secret": process.env.MIX_PASSPORT_CLIENT_KEY,
                "refresh_token": refresh_token,
                "scope": "*"
              }
        
//console.log("formData=",formData)

        axios.post(actionTypes.AUTH_LOGIN_URL,formData)
        .then(resp=>{
            //console.log(resp.data)
            dispatch(authSuccess(resp.data));
        })
        .catch(err => {
            //console.log('Error=',err.message);
            dispatch(authError(err.response.data.message));
        });
        
    }
}

export function registerUser(formData){

    return dispatch=>{
       // dispatch(authStart());


//console.log("formData=",formData)

        axios.post(actionTypes.AUTH_SIGNUP_URL,formData)
        .then(resp=>{
            //console.log(resp.data)
            dispatch(authSuccess(resp.data));
            dispatch({type: actionTypes.AUTH_REGISTER_REDIRECT});
        })
        .catch(err => {
            console.log('Error=',typeof err.response.data.errors, err.response.data);
            if(typeof err.response.data.errors === 'object'){
                dispatch(authError(err.response.data.errors));
            }
            else dispatch(authError(err.response.data.message));
        });

    }
}