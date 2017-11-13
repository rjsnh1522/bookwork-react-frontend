import { combineReducers } from 'redux';

import userReducer from "./reducers/userReducer";



// reducers are the pure function which only takes a state and returns the next state


export default combineReducers({

  userReducer: () =>({})

});
