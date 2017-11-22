import React,{Component} from 'react';

import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {loginAction} from '../../actions/auth';




class LoginPage extends Component {

  submitLoginForm = (data) =>  this.props.loginAction(data).then(()=> this.props.history.push('/dashboard'));



  // loginAction is the function where we want to send the data so first we need to import it here then connect it
  // with connect from react-redux makes possible to use these function
  // go down to read more about conenct


  render(){
    return (
      <div>
        <Link to="/">Home </Link>
        <LoginForm submit={this.submitLoginForm}/>
      </div>

    )
  }
}

LoginPage.PropTypes = {
  history:PropTypes.shape({
    push:PropTypes.func.isRequired
  }).isRequired
}




export default connect(null, {loginAction})(LoginPage);


// connect allows to pass data from state to this current component if we dont need any data then we
// will use null as first params

// connect 2nd params takes and object of the function we want to dispatch to action
// example we are dispacthing login function
// got to actions/auth.js to read more
