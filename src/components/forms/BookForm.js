import React, { Component } from 'react';

import {Form , Button,Message,Grid,Dropdown,Radio } from 'semantic-ui-react'
import Validator from 'validator';
import InLineError from '../messages/InLineError'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class BookForm  extends Component{


          state = {
            data:{
              book_id: this.props.book.book_id,
              cat: this.props.book.cat[0],
              name: this.props.book.name,
              author: this.props.book.author,
              series_t: this.props.book.series_t,
              sequence_i: this.props.book.sequence_i,
              genre_s: this.props.book.genre_s,
              inStock: this.props.book.inStock,
              price: this.props.book.price,
              pages_i: this.props.book.pages_i
            },
            cat:this.props.book.cat,
            loading: false,
            errors:{}
          };


// till now everything is fine
//but if we change the book it will not change the data accordingly
// so to achieve this we will use componentWillReceiveProps

componentWillReceiveProps(props){
  this.setState({
    data:{
        book_id: props.book.book_id,
        cat: props.book.cat[0],
        name: props.book.name,
        author: props.book.author,
        series_t: props.book.series_t,
        sequence_i: props.book.sequence_i,
        genre_s: props.book.genre_s,
        inStock: props.book.inStock,
        price: props.book.price,
        pages_i: props.book.pages_i
      },
      cat:props.book.cat
    })
}



  onChange = e => {
    this.setState({
      data:{...this.state.data,[e.target.name]: e.target.value }
    })
  }
  // onSiteChanged = (e) => {
  //   this.setState({
  //     inStock: e.currentTarget.value
  //     });
  // }


  onSubmit = () => {
    const errors =  this.validate(this.state.data);

      this.setState({errors});

      if(Object.keys(errors).length===0){
          this.setState({loading:true})
        // this submit method is inside LoginPage.js its a prop this submit method invokes submitLoginForm function of LoginPage.js

        this.props.submit(this.state.data).then((data) => {})
        .catch(err => { this.setState({errors: err.response.data.errors,loading:false})}
      );

      }



  }

  validate = (data) =>{
    const errors = {};
    if(!data.name) errors.name = "Cant be blank";
    if(!data.author) errors.author = "Cant be blank";
    if(!data.price) errors.price = "Cant be blank";

    if(!data.series_t) errors.series_t = "Cant be blank";

    return errors;
  }

    render(){
        const { data,errors,loading } = this.state;
        const catago  = this.state.cat;
        const cat=[];
        for(var i = 0; i < catago.length;i++ ){
          cat.push({
            key:i,
            value:i,
            text:catago[i]
          })
        }
        // console.log(data)
      return(
        <Grid centered columns={2}>
            <Grid.Row columns={2}>
                <h1> Book Form </h1>
            </Grid.Row>
          <Grid.Row columns={2}>
             <Grid.Column width={6}>
                <Form onSubmit={this.onSubmit} loading={loading}>
                  {errors.msg && <Message negative>
                    <Message.Header> Something went wrong </Message.Header>
                    <p>{errors.msg}</p>
                  </Message>}
                  <Form.Field error={!!errors.name}>
                      <label htmlFor="title"> name </label>
                      <input type="text" id="name"
                        name="name"
                        placeholder="name"
                        value={data.name}
                        onChange={this.onChange}/>
                        {errors.name &&  <InLineError text={errors.name} /> }
                  </Form.Field>
                  <Form.Field error={!!errors.series_t}>
                      <label htmlFor="title"> series_t </label>
                      <input type="text" id="series_t"
                        name="series_t"
                        placeholder="series_t"
                        value={data.series_t}
                        onChange={this.onChange}/>
                        {errors.series_t &&  <InLineError text={errors.series_t} /> }
                  </Form.Field>

                  <Form.Field error={!!errors.author}>
                      <label htmlFor="author"> author </label>
                      <input type="text" id="author"
                        name="author"
                        placeholder="author"
                        value={data.author}
                        onChange={this.onChange}/>
                        {errors.author &&  <InLineError text={errors.author} /> }
                  </Form.Field>

                  <Dropdown placeholder='Select Category' fluid selection options={cat} />
                  <Form.Field>
                      In stock: <b>{data.inStock}</b>
                    </Form.Field>
                    <Form.Field>
                      <Radio
                        label='yes available'
                        name='radioGroup'
                        value={data.inStock.toString()}
                        checked={data.inStock.toString() === 'true'}
                        onChange={this.onSiteChanged}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Radio
                        label='Not available'
                        name='radioGroup'
                        value={data.inStock.toString()}
                        checked={data.inStock.toString() === 'false' }
                        onChange={this.onSiteChanged}
                      />
                    </Form.Field>

                  <Form.Field error={!!errors.price}>
                      <label htmlFor="email"> price </label>
                      <input type="text" id="price"
                        name="price"
                        placeholder="price"
                        value={data.price}
                        onChange={this.onChange}/>
                        {errors.price &&  <InLineError text={errors.price} /> }
                  </Form.Field>

                      <Button primary> Save book</Button>
                  </Form>
                </Grid.Column>
            </Grid.Row>
          </Grid>
      )
    }

}

BookForm.PropTypes = {
  submit: PropTypes.func.isRequired,
  book: PropTypes.shape({
    book_id: PropTypes.string.isRequired,
    cat: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    series_t: PropTypes.string.isRequired,
    sequence_i: PropTypes.number.isRequired,
    genre_s: PropTypes.string.isRequired,
    inStock: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pages_i: PropTypes.number.isRequired
  }).isRequired
}


export default BookForm;
