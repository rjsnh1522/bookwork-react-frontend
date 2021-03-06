import React,{ Component } from 'react';
import { Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { confirmAction } from '../../actions/auth'
import {connect} from 'react-redux';

class ConfirmationPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading:true,
      success:false,

    }

  }


//confirmAction is an action defined inside auth.js connect is used to conenct to bring that method
// here so that we can use it as a props
  componentDidMount(){
    this.props.confirmAction(this.props.match.params.token)
    .then(() => this.setState({loading:false,success:true}))
    .catch(() => this.setState({loading:false,success:false}))
  }

render(){
  const {loading,success} = this.state;
  return(
    <div>

      {loading && <Message icon>
          <Icon name="circle notched" loading/>
          <Message.Header>Validating your Email</Message.Header>
        </Message>}

        {!loading && success && <Message success icon>
            <Icon name="checkmark"/>
            <Message.Header>Thank you. you are verified</Message.Header>
            <Link to="/dashboard"> Go to your dashboard </Link>
          </Message>}

          {!loading && !success && <Message negative icon>
              <Icon name="warning sign"/>
              <Message.Header>OOps Invalid token</Message.Header>
            </Message>}



    </div>
  )
}



}





ConfirmationPage.PropTypes = {

  confirmAction: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired

};




export default connect(null,{ confirmAction })(ConfirmationPage);
