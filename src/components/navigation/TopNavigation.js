import React, { Component } from 'react';
import {Menu,Image,Dropdown } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import gravatarUrl from 'gravatar-url';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logoutAction} from '../../actions/auth'

class TopNavigation  extends Component{


    render(){
      const {user, logoutAction} = this.props;
      return(
      <Menu secondary pointing>
          <Menu.Item as={Link} to="/dashboard">
            Dashboard
          </Menu.Item>
          <Menu.Item as={Link} to="/books/new">
            Add new Book
          </Menu.Item>
          <Menu.Menu position="right">
              <Dropdown trigger={<Image avatar src={gravatarUrl('rjsnh1522@gmail.com')}/>}>
              <Dropdown.Menu>
                <Dropdown.Item onClick={()=>logoutAction()}>Logout </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
      </Menu>
      )
    }

}


TopNavigation.PropTypes ={
  user:PropTypes.shape({
    email:PropTypes.string.isRequired
  }).isRequired,
  userLoggedOut: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    user : state.userReducer
  }
}






export default connect(mapStateToProps,{logoutAction})(TopNavigation);
