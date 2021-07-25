import {createStore,applyMiddleware} from 'redux';
import userReducer from './user/userReducer';
import reduxThunk from 'redux-thunk' 
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(userReducer,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store