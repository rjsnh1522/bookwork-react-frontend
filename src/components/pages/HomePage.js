import React,{Component} from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'
import {logoutAction} from '../../actions/auth';



class HomePage extends Component {

  render(){
    const {isAuthenticated,logoutAction} = this.props;
    console.log(this.props);
    return (
      <div>
              <h1>  HomePage   </h1>
              {isAuthenticated ? <Button onClick={()=>logoutAction()}>Logout </Button> : <Link to="/login">Login </Link>}

      </div>

    )
  }
}


HomePage.PropTypes ={
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state){
  //this return the props which will available to this component

  console.log("home",state.userReducer)
  return {
    isAuthenticated: !!state.userReducer.token,
    logoutAction:PropTypes.func.isRequired
  }

}

export default connect(mapStateToProps,{logoutAction})(HomePage);
