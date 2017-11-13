import {USER_LOGGED_IN} from '../types';

// import the types from type files



export default function userReducer(state={},action={}){

    console.log(state,action)
  switch (action.type) {
    case USER_LOGGED_IN:

      console.log(action)
      return action.user;
      break;
    default:
      return state;

  }
}
