import React, { Component } from 'react';
import { Message } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {validateTokenAction,passwordResetAction} from '../../actions/auth';
import ResetPasswordForm  from '../forms/ResetPasswordForm'


class ResetPasswordPage  extends Component{
      constructor(props) {
          super(props)
          this.state = {
            loading:true,
            success:false,
          };
      }

componentDidMount(){
  this.props.validateTokenAction(this.props.match.params.token)
  .then(()=> this.setState({loading:false,success:true}))
  .catch(() => this.setState({loading:false, success:false}))
}


submitResetPasswordForm = (data) => (
  this.props.passwordResetAction(data).then(()=> this.props.history.push('/login')));



    render(){
      const {loading ,success} = this.state;
      const token = this.props.match.params.token;
      return(
      <div>
          {loading && (<Message > Loading </Message>)}
          {!loading && success && (<ResetPasswordForm submit={this.submitResetPasswordForm} token={token}/>)}
          {!loading && !success && (<Message > Invalid Token</Message>)}

      </div>
      )
    }

}


ResetPasswordPage.PropTypes = {
  validateTokenAction: PropTypes.func.isRequired,
  submitResetPasswordForm: PropTypes.func.isRequired,
  passwordResetAction: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params :PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  history:PropTypes.shape({
    push:PropTypes.func.isRequired
  }).isRequired
}



export default connect(null,{passwordResetAction,validateTokenAction})(ResetPasswordPage);
