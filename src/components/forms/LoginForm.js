import React,{Component} from 'react';

import {Form , Button,Message,Grid } from 'semantic-ui-react'
import Validator from 'validator';
import InLineError from '../messages/InLineError'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class LoginForm extends Component {

  constructor(){

    super();

    this.state = {
      data:{
        email:'',
        password:''

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

  onSubmit = () => {
    const errors =  this.validate(this.state.data);

      this.setState({errors});

      if(Object.keys(errors).length===0){
          this.setState({loading:true})
        // this submit method is inside LoginPage.js its a prop this submit method invokes submitLoginForm function of LoginPage.js

        this.props.submit(this.state.data)
        .catch(err => { this.setState({errors: err.response.data.errors,loading:false})}
      );

      }



  }

  validate = (data) =>{
    const errors = {};


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
                <h1> Login</h1>
            </Grid.Row>
          <Grid.Row columns={2}>
             <Grid.Column width={6}>
                <Form onSubmit={this.onSubmit} loading={loading}>
                  {errors.msg && <Message negative>
                    <Message.Header> Something went wrong </Message.Header>
                    <p>{errors.msg}</p>
                  </Message>}
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
                      <Button primary> Login </Button>
                      <Link to="/forgot-password" > Forgot password ? </Link>
                  </Form>
                </Grid.Column>
            </Grid.Row>
          </Grid>

    )
  }
}


LoginForm.PropTypes = {

submit:PropTypes.func.isRequired

}



export default LoginForm;
