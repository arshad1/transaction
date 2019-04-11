import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';


import rootReducer from  './Reducers/index'; 

const middleware = applyMiddleware(thunk);

 const Store = createStore(rootReducer, middleware);

 export default Store;