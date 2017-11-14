import React,{Component} from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {signUpAction} from '../../actions/auth';
import SignupForm from '../forms/SignupForm';

class SignupPage extends Component {


  submitSignUpForm = (data) => this.props.signUpAction(data).then(()=> this.props.history.push('/dashboard'));


  render(){
    return (
      <div>
        <Link to="/">Home </Link>
        <SignupForm submit={this.submitSignUpForm}/>

      </div>

    )
  }
}


SignupPage.PropTypes = {
  history:PropTypes.shape({
    push:PropTypes.func.isRequired
  }).isRequired
}



export default connect(null,{signUpAction})(SignupPage);
