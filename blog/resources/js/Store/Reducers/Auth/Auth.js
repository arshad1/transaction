
import {Constants} from '../../Actions/index';

import updateObject from '../../../Utility/Common';


let tk = localStorage.getItem(Constants.TOKEN);
const initialState = {
    token: (tk && tk != 'null') ? localStorage.getItem(Constants.TOKEN) : null,
    refresh_token: localStorage.getItem(Constants.REFRESH_TOKEN) ? localStorage.getItem(Constants.REFRESH_TOKEN) :null,
    expires_in:localStorage.getItem(Constants.TOKEN_EXPIRY) ? localStorage.getItem(Constants.TOKEN_EXPIRY) :null,
    userId: null,
    error: null,
    loading: false,
    isRegistered: false,
    authRedirectPath: '/home'
}


export const Auth = (state = initialState, action) => {
    switch (action.type) {
        case Constants.AUTH_START:
            return  updateObject(state,{
                token: null,
                refresh_token:null,
                expires_in:null,
                userId: null,
                error: null,
                isRegistered: false,
                loading: true,
            });
            case Constants.AUTH_SUCCESS:
         //   console.log('object',action);
            return  updateObject(state,{
                token: action.resp.access_token,
                refresh_token:action.resp.refresh_token,
                expires_in:action.resp.expires_in,
                userId: 'action.userId',
                error: null,
                isRegistered: false,
                authRedirectPath: '/home',
                loading: false,
            }); 
            case Constants.AUTH_FAIL:
            return  updateObject(state,{
                token: null,
                refresh_token:null,
                expires_in:null,
                userId: null,
                isRegistered: false,
                error: action.resp,
                loading: false,
            });

            case Constants.AUTH_REGISTER_REDIRECT:
            return  updateObject(state,{
                token: null,
                refresh_token:null,
                expires_in:null,
                userId: null,
                error: null,
                isRegistered: true,
                authRedirectPath: '/login',
                loading: false,
            });

            case Constants.CLEAR_AUTH_REGISTER_REDIRECT:
            return  updateObject(state,{
                token: null,
                refresh_token:null,
                expires_in:null,
                userId: null,
                error: null,
                isRegistered: false,
                loading: false,
            });
            case Constants.AUTH_LOGOUT:
           // console.log('You reached here')
            return  updateObject(state,{
                token: null,
                refresh_token:null,
                expires_in:null,
                userId: null,
                isRegistered: false,
                error: null,
                loading: false,
            }); 
        default:
            return state
    }
}

