import React from 'react';
import PropTypes from 'prop-types';
import {Route,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';



const UserRoute = ({isAuthenticated, component: Component,...rest}) =>(

    <Route {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" /> }
      />


);


UserRoute.PropTypes = {
  component:PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}


function mapStateToProps(state){

  return {
    isAuthenticated: !!state.userReducer.token
  }
}

export default connect(mapStateToProps)(UserRoute);
