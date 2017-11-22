import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Validator from 'validator';
import {Form , Button,Message,Grid } from 'semantic-ui-react'
import InLineError from '../messages/InLineError'
import {Link} from 'react-router-dom';


class ForgotPasswordForm  extends Component{



  constructor(props) {
    super(props)

    this.state = {
      data: {
        email:''
      },
      loading:false,
      errors:{}
    }
    // doing the react in es5 way
    // in this we need to bind the methods inside the connstructor and pass this to them

    this.validate = this.validate.bind(this);
  }

  onChange = e => {
    this.setState({
      data:{...this.state.data,[e.target.name]: e.target.value }
    })
  }

submitpasswordReq = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0){
      // calling the submit props so that we can send these data to ForgotPassword and there api call will be done
      this.props.submit(this.state.data)
      .catch(err => {
        console.log(err.response)
        this.setState({errors:err.response.data.errors,loading:false})
      })
    }

}


validate(data){

  const errors = {}

  if(!Validator.isEmail(data.email)) errors.email = "Invalid Email";

  return errors;
  console.log(data);
}



  render(){
    const {data , errors , loading} = this.state;

    return(
      <div>
        <Grid centered columns={2}>
            <Grid.Row columns={2}>
                <h1> Reset password</h1>
            </Grid.Row>
          <Grid.Row columns={2}>
             <Grid.Column width={6}>
                <Form onSubmit={this.submitpasswordReq} loading={loading}>
                  {!!errors.msg && <Message negative>
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
                      <Button primary> Submit </Button>
                      <Link to="/signup" >Sign up</Link> OR  <Link to="/login" > Login </Link>
                  </Form>
                </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    )
  }
}





ForgotPasswordForm.PropTypes = {
    submitpasswordReq: PropTypes.func.isRequired
}


export default ForgotPasswordForm;
