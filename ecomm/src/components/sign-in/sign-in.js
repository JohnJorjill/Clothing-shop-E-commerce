import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustonButton from '../custom-button/custom-button';
import './sign-in.scss';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className='sign-in'>
              <h2>I already have an account</h2>
              <span>Sign in with your email and password</span>

              <form onSubmit={this.handleSubmit}>
                  <FormInput 
                    handleChange={this.handleChange} 
                    name="email" type="email" 
                    value={this.state.email} 
                    label="Email"
                    required
                  />
                  <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label="Password"
                    required
                  />
                  <CustonButton type='submit'> Sign in </CustonButton>
              </form>
            </div>
        )
    }
}

export default SignIn;