import axios from 'axios'

const url = `http://localhost:4000`;
export default {
  user: {
    login: credentials =>
      axios.post(url+"/sessions",{credentials}).then(res => {return (res.data.user)}),
    signupApi: formData =>
      axios.post(url+"/registrations",{formData}).then(res => {return (res.data.user)}),
    emailConfirmation: token =>
      axios.post(url+"/registrations/confirmation",{token}).then(res => { console.log(res); return (res.data.user) }),
    passwordReset:data =>
      axios.post(url+"/registrations/password_reset",{data}).then(function(res){
          console.log(res);

          return "ab";
      }),
    validateToken: token =>
      axios.post(url+"/registrations/validate_token",{token}),
    passwordResetFormData: data =>
      axios.post(url+"/registrations/password_reset_form",{data})

  },
  book:{
    saveNewBook: data =>
      axios.post(url+"/books/save_books",{data}).then(res => {return res.data.book;}),
    fetchAll: () =>
      axios.get(url+"/books").then(res => { return res.data.books })

  }
};
