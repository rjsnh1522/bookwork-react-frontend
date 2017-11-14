import axios from 'axios'

const url = `http://localhost:4000`;
export default {
  user: {
    login: credentials =>
      axios.post(url+"/sessions",{credentials}).then(res => {return (res.data.user)}),
    signupApi: formData =>
      axios.post(url+"/registrations",{formData}).then(res => {return (res.data.user)}),
  }
};
