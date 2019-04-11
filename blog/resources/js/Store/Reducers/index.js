import { combineReducers } from 'redux';

import {Auth} from  './Auth/Auth';
import {chatReducer} from './Chat/Chat'

const rootReducer = combineReducers({authReducer:Auth,chatReducer:chatReducer});

export default rootReducer;