import {USER_LOGGED_IN,USER_LOGGED_OUT,USER_SIGNED_UP} from '../types';

// import the types from type files



export default function userReducer(state={},action={}){
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    case USER_LOGGED_OUT:
      return {};
    case USER_SIGNED_UP:
      return action.user;
    default:
      return state;

  }
}
