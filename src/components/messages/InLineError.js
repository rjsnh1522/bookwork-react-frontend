import React,{Component} from 'react';
import PropTypes from 'prop-types';


class InLineError extends Component {
  // constructor() {
  //
  // }

        render(){


        return (
          <span style={{color:"#ae5956"}}>{this.props.text} </span>
        )
      }



}


InLineError.PropTypes = {
  text: PropTypes.string.isRequired
}

export default InLineError;
