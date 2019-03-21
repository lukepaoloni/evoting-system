import React, { Component } from "react";
import "../styles/form.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import strings from "../lang/strings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { setIatDate } from "../actions/countdown";

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

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      loginSucc: false,
      formErrors: {
        username: "",
        password: ""
      },
      role: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    strings.setLanguage(sessionStorage.getItem("lang"));
  }

  notifySuccess = content => {
    toast.success(content, { position: "top-center" });
  };

  notifyError = content => {
    toast.error(content, { position: "top-center" });
  };

  handleChange(e) {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    const error = strings.login_min;

    switch (name) {
      case "username":
        formErrors.username = value.length < 3 ? error : "";
        break;
      case "password":
        formErrors.password = value.length < 3 ? error : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  }

  componentWillMount() {}

  async handleSubmit(e) {
    e.preventDefault();
    if (formValid(this.state)) {
      let loginDetails = {
        username: this.state.username,
        password: this.state.password
      };
      try {
        const res = await axios.post(
          "http://localhost:4000/api/rest/users/login",
          loginDetails
        );
        sessionStorage.setItem(
          "user",
          JSON.stringify({
            token: res.data.token,
            username: this.state.username,
            expire: res.data.expiresIn,
            role: res.data.role
          })
        );
        // this.props.dispatch(setIatDate(res.data.iatDate));
        const iatDate = new Date(res.data.iatDate);
        const diff = new Date(iatDate.getTime() + 3600000);
        const nowInMs = new Date().getTime();
        const diffInMs = diff - nowInMs;
        console.log("diff", diffInMs);
        console.log(diff.toString());
        this.setState({ loginSucc: true, role: res.data.role });
        this.notifySuccess(res.data.message);
      } catch (err) {
        console.error(err);
        console.log("error", err.response.data.message);
        this.notifyError(err.response.data.message);
      }
    } else {
      alert("FORM INVALID");
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  }

  render() {
    const { loginSucc, role, formErrors } = this.state;
    if (loginSucc) {
      if (role === "voter") {
        return <Redirect to={"/vote"} />;
      } else {
        return <Redirect to={"/admin"} />;
      }
    }
    return (
      <div className="wrapper">
        <ToastContainer autoClose={8000} />
        <div className="form-wrapper">
          <p className="fas fa-person-booth centerImg fa-8x" />
          <h1>{strings.login_login}</h1>
          <div>
            <div className="evoting">
              <label
                htmlFor="username"
                style={{ fontSize: this.props.fontSize }}
              >
                {strings.login_usernmame}
              </label>
              <input
                placeholder={strings.login_usernmame}
                type="text"
                name="username"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </div>
            <div className="evoting">
              <label
                htmlFor="password"
                style={{ fontSize: this.props.fontSize }}
              >
                {strings.login_pass}
              </label>
              <input
                placeholder={strings.login_pass}
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div />

            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}

            <div className="createAccount">
              <button id="login" onClick={this.handleSubmit}>
                {strings.login_login}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fontSize: state.accessibility.fontSize,
  iatDate: state.countdown.iatDate
});
export default connect(mapStateToProps)(LoginView);
