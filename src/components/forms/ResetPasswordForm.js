import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import {Form , Button,Message,Grid } from 'semantic-ui-react'
import InLineError from '../messages/InLineError'
import {Link} from 'react-router-dom';



class ResetPasswordForm  extends Component{
      constructor(props) {
          super(props)
          this.state = {
            data:{
              password:'',
              confirm_password:'',
              token:this.props.token
            },
            loading:false,
            errors:{}
          };
      }

        onChange = e => {
          this.setState({
            data:{...this.state.data,[e.target.name]: e.target.value }
          })
        }

onSubmitResetPasswordForm = () => {

  const errors = this.validate(this.state.data)
    this.setState({errors:errors});

    if(Object.keys(errors).length === 0){
      this.setState({loading:true});

      this.props.submit(this.state.data)
      .catch(err => {console.log(err.response);this.setState({errors: err.response.data.errors,loading:false})});

    }

}

validate = (data) => {

  const errors = {};

  if(!data.confirm_password) errors.confirm_password ="Confirm password can't be blank";
  if(data.password !== data.confirm_password) errors.confirm_password = "password confirmation must be same as password";
  if(data.password.length < 6) errors.password = "Must be 6 or greater";
  if(!data.password) errors.password = "Can't Be blank";

  return errors;


}


    render(){

      const {loading,errors,data} = this.state;
      return(
        <Grid centered columns={2}>
              <Grid.Row columns={2}>
                <h1>Reset Password</h1>
              </Grid.Row>
            <Grid.Row columns={2}>
               <Grid.Column width={6}>
                  <Form onSubmit={this.onSubmitResetPasswordForm} loading={loading}>
                    {errors.msg && <Message negative>
                      <Message.Header> Something went wrong </Message.Header>
                      <p>{errors.msg}</p>
                    </Message>}

                    <Form.Field error={!!errors.password}>
                        <label htmlFor="password"> Password </label>
                        <input type="password" id="password"
                          name="password"
                          placeholder="some thing strong"
                          value={data.password}
                          onChange={this.onChange}/>
                          {errors.password &&  <InLineError text={errors.password} /> }
                    </Form.Field>
                    <Form.Field error={!!errors.confirm_password}>
                        <label htmlFor="confirm_password"> Confirm Password</label>
                        <input type="password" id="confirm_password"
                          name="confirm_password"
                          placeholder="same as the password"
                          value={data.confirm_password}
                          onChange={this.onChange}/>
                          {errors.confirm_password &&  <InLineError text={errors.confirm_password} /> }
                    </Form.Field>
                      <Button primary> Reset Password </Button>
                  </Form>
             </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }

}


ResetPasswordForm.PropTypes = {
  onSubmitResetPasswordForm: PropTypes.func.isRequired
}




export default ResetPasswordForm;
