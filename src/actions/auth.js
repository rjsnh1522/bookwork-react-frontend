import {USER_LOGGED_IN,USER_LOGGED_OUT} from '../types';
import api from '../api'



// action is function which returns another function





export function userLoggedIn(user){
  const action={
      type:USER_LOGGED_IN,
      user
    }

    return action

}


export function userLoggedOut(){
  const action={
      type:USER_LOGGED_OUT,
    }

    return action

}



// the data passed from LoginPage component inside loginAction function came here then we
// pass this data to api.js to user login object their ajax request is performed and
// and after getting the data userLoggedIn function is called which returns the type and user
// // which will be used by user_reducer to update the state throughout the project

export const loginAction = (credentials) => dispatch  =>

  api.user.login(credentials).then(user => {
    localStorage.bookworkJWT = user.token;
                dispatch(userLoggedIn(user))
                }

);


export const logoutAction = () => dispatch  => {
  localStorage.removeItem('bookworkJWT');
          dispatch(userLoggedOut())
};
