import React,{Component} from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class HomePage extends Component {

  render(){
    const {isAuthenticated} = this.props;
    return (
      <div>
              <h1>  HomePage   </h1>
              {isAuthenticated ? <Link to="/logout">Logout </Link> : <Link to="/login">Login </Link>}

      </div>

    )
  }
}


HomePage.PropTypes ={
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state){
  //this return the props which will available to this component

  console.log(state)
  return {
    // isAuthenticated: !!state.user.token
  }

}

export default connect(mapStateToProps,null)(HomePage);
