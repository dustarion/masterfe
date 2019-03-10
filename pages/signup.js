import React, { Component } from "react";
import style from "./signup.css";
import Header from "../components/Header";
import BG from "../components/BG";
import TextInput from "../components/TextInput";
import SolidButton from "../components/SolidButton";
import validator from "validator";
import axios from "axios";
import { BACKEND_URL } from "../Constants";
import firebase from "firebase";

class SignUpPage extends Component {
  state = {
    email: "",
    password: "",
    cfmPass: "",
    name: ""
  };

  initSignUp() {
    const email = this.state.email;
    const pass = this.state.password;
    const cfmpass = this.state.cfmPass;
    const name = this.state.name;
    if (!validator.isEmail(email)) {
      alert("not an email");
      return;
    }
    if (!validator.isLength(name, { min: 1 })) {
      alert("name cannot be empty");
      return;
    }
    if (!validator.isLength(pass, { min: 6 })) {
      alert("password has to be min 6 char");
      return;
    }
    if (pass != cfmpass) {
      alert("pass and cfm not same");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, pass)
          .then(() => {
            firebase
              .auth()
              .currentUser.sendEmailVerification({
                url:
                  "http://localhost:3080/login?n=" +
                  name +
                  "&fsu=true&e=" +
                  email
              })
              .then(() => {
                alert("email sent");
              });
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className={style.container}>
        <Header />
        <BG />
        <div className={style.contentWrapper}>
          <div className={style.sideLeft}>
            <div className={style.contentLeft}>
              <h1 className={style.h1login}>Sign up</h1>
              <h3 className={style.h3login}>Sign up with your email.</h3>
              <div>
                <TextInput
                  placeholder="Email"
                  onChangeText={text => {
                    this.setState({ email: text });
                  }}
                  id="email"
                />
                <TextInput
                  placeholder="Name"
                  onChangeText={text => {
                    this.setState({ name: text });
                  }}
                  id="name"
                />
                <TextInput
                  placeholder="Password"
                  password={true}
                  onChangeText={text => {
                    this.setState({ password: text });
                  }}
                  id="password"
                />
                <TextInput
                  placeholder="Confirm Password"
                  password={true}
                  onChangeText={text => {
                    this.setState({ cfmPass: text });
                  }}
                  id="cfmPass"
                  onReturn={() => {
                    this.initSignUp();
                  }}
                />
                <div
                  style={{ marginTop: 30, marginLeft: -10, marginRight: -10 }}
                >
                  <SolidButton
                    color="#ff0039"
                    text="continue"
                    onClick={() => this.initSignUp()}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }} />
        </div>
      </div>
    );
  }
}

export default SignUpPage;
