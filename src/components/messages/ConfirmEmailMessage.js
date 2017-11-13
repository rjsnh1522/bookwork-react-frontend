import React,{Component} from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react'


class ConfirmEmailMessage extends Component {

  render(){

    return (
      <Message info>
          <Message.Header>
            Please verify to unlock site
          </Message.Header>
      </Message>

    )
  }
}


export default ConfirmEmailMessage;
