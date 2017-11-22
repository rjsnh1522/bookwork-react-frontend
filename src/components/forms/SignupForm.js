import React,{Component} from 'react';

import {Form , Button,Message,Grid } from 'semantic-ui-react'
import Validator from 'validator';
import InLineError from '../messages/InLineError'
import PropTypes from 'prop-types';

class SignupForm extends Component {

  constructor(){

    super();

    this.state = {
      data:{
        email:'',
        password:'',
        username:'',
        confirm_password:''
      },
      loading: false,
      errors:{}
    };

  }

  onChange = e => {
    this.setState({
      data:{...this.state.data,[e.target.name]: e.target.value }
    })
  }

  onSubmitSignUpForm = () => {
    const errors =  this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length===0){
        this.setState({loading:true})
          // this submit method is inside signupPage.js its a prop this submit method invokes
        // submitSignupForm function of signupPage.js

      this.props.submit(this.state.data)
        .catch(err => {console.log(err.response);this.setState({errors: err.response.data.errors,loading:false})}
      );
    }
  }

  validate = (data) =>{
    const errors = {};

    if(data.username.length < 6) errors.username = "Username should be greater than 6";
    if(!data.confirm_password) errors.confirm_password ="Confirm password can't be blank";
    if(data.password !== data.confirm_password) errors.confirm_password = "password confirmation must be same as password";
    if(!Validator.isEmail(data.email)) errors.email = "Invalid Email";
    if(data.password.length < 6) errors.password = "Must be 6 or greater";
    if(!data.password) errors.password = "Can't Be blank";
    return errors;
  }

  render(){
    const { data,errors,loading } = this.state;
    return (
      <Grid centered columns={2}>
            <Grid.Row columns={2}>
              <h1> Sign Up Please</h1>
            </Grid.Row>
          <Grid.Row columns={2}>
             <Grid.Column width={6}>
                <Form onSubmit={this.onSubmitSignUpForm} loading={loading}>
                  {errors.msg && <Message negative>
                    <Message.Header> Something went wrong </Message.Header>
                    <p>{errors.msg}</p>
                  </Message>}
                  <Form.Field error={!!errors.username}>
                      <label htmlFor="username"> UserName </label>
                      <input type="text" id="email"
                        name="username"
                        placeholder="example@example.com"
                        value={data.username}
                        onChange={this.onChange}/>
                        {errors.username &&  <InLineError text={errors.username} /> }
                  </Form.Field>
                  <Form.Field error={!!errors.email}>
                      <label htmlFor="email"> Email </label>
                      <input type="email" id="email"
                        name="email"
                        placeholder="example@example.com"
                        value={data.email}
                        onChange={this.onChange}/>
                        {errors.email &&  <InLineError text={errors.email} /> }
                  </Form.Field>
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
                    <Button primary> Sign Up </Button>
                </Form>
           </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}


SignupForm.PropTypes = {

submit:PropTypes.func.isRequired

}



export default SignupForm;
