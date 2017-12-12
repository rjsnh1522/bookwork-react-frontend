import React, { Component } from 'react';




class ListOfBooks  extends Component{

    state ={
      books: this.props.allBooks
    }


    render(){
      console.log(this.state);
      return(
      <div>

      </div>
      )
    }

}




export default ListOfBooks;
