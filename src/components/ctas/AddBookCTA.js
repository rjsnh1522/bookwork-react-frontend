import React, { Component } from 'react';
import {Card,Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class AddBookCTA  extends Component{
      constructor(props) {
          super(props)
          this.state = {

          };
      }

    render(){

      return(
      <Card centered>
        <Card.Content textAlign="center">
          <Card.Header>   Add New Book</Card.Header>
        <Link to="/books/new">  <Icon name="plus circle" size="massive"/></Link>
          </Card.Content>

      </Card>
      )
    }

}




export default AddBookCTA;
