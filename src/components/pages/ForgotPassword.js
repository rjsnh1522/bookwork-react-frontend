import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {resetPasswordRequestAction} from '../../actions/auth'
import ForgotPasswordForm  from '../forms/ForgotPasswordForm'

class ForgotPassword  extends Component{
  constructor(props) {
    super(props);

    this.state = {
      success: false

    }
    // this.submitForgotPassword = this.submitForgotPassword.bind(this);
    // this.resetPasswordRequestAction = this.resetPasswordRequestAction.bind(this)
    // this.callIng = this.callIng.bind(this);

  }


// callIng(){
//
// }
  //
  // submitForgotPassword = (data) =>
  //   this.props.resetPasswordRequestAction(data).then(function(){
  //     this.setState({success:true})
  //   })



  submitForgotPassword = (data) => this.props
                  .resetPasswordRequestAction(data)
                  .then(() =>
                    this.setState({success:true})
                  )


  render(){

    return(
      <div>
      {this.state.success ? (<Message > Email Has been Sent</Message>) :
        (<ForgotPasswordForm submit={this.submitForgotPassword}/>)}

      </div>
    )
  }
}





ForgotPassword.PropTypes = {
    resetPasswordRequestAction: PropTypes.func.isRequired
}












export default connect(null,{resetPasswordRequestAction})(ForgotPassword);
