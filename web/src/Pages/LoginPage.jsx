import React, {Component} from 'react';
import '../styles/form.css';
import {Redirect} from 'react-router-dom'
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
        
      val === null && (valid = false);
    });
   
    return valid;
  };
  
export default class LoginView extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: null,
            password: null,
            loginSucc: false,
            formErrors: {
              username: "",
              password: "",
            }
          };
          this.handleSubmit = this.handleSubmit.bind(this)
          this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "username":
        formErrors.username =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
    }

    componentWillMount(){
      
      
    }
    async handleSubmit(e){
        e.preventDefault()
        if (formValid(this.state)) {
          
            let Loginuserdetails = {
                username: this.state.username,
                password: this.state.password
            }
            
            console.log(Loginuserdetails);
            this.setState({loginSucc:true})
            console.log(this.state.loginSucc);
            sessionStorage.setItem('user', 'Blanc')
          } else {
            alert("FORM INVALID")
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
          }

    }
    
    render(){
        if(this.state.loginSucc)
            return <Redirect to={'/'}/>
        const { formErrors } = this.state;
        return(
            <div className="wrapper">
                <div className="form-wrapper">
                <img className="centerImg" alt="login" 
                    src="https://cdn3.iconfinder.com/data/icons/city-lifestyle-glyph-black/2048/6496_-_Voting-512.png" width="200px" height="200px"></img>
                    <h1>Login</h1>
                    <div >
                        <div className="evoting">
                            <label htmlFor="username">{"Username"}</label>
                            <input
                                placeholder={"username"}
                                type="text"
                                name="username"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.username.length > 0 && (
                                <span className="errorMessage">{this.state.formErrors.username}</span>
                            )}
                        </div>
                        <div className="evoting">
                            <label htmlFor="password">{"Password"}</label>
                            <input
                                placeholder={"Password"}
                                type="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                        </div>
                        
                        {formErrors.password.length > 0 && (
                            <span className="errorMessage">{formErrors.password}</span>
                        )}
                        
                        <div className="createAccount">
                        <button onClick={this.handleSubmit}>{"login"}
                        
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}