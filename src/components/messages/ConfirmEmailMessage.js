import React,{Component} from 'react';

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
