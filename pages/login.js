import React, { Component } from "react";
import style from "./login.css";
import Header from "../components/Header";
import BG from "../components/BG";
import TextInput from "../components/TextInput";
import SolidButton from "../components/SolidButton";
import axios from "axios";
import { BACKEND_URL } from "../Constants";
import firebase from "firebase";

class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };

  initLogin() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(x => {
        console.log(x);
      })
      .catch(err => {
        alert("An error occurred");
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
              <h1 className={style.h1login}>Login</h1>
              <h3 className={style.h3login}>Sign in with your email.</h3>
              <div>
                <TextInput
                  placeholder="Email"
                  onChangeText={text => {
                    this.setState({ email: text });
                  }}
                  id="email"
                />
                <TextInput
                  placeholder="Password"
                  password={true}
                  onChangeText={text => {
                    this.setState({ password: text });
                  }}
                  id="password"
                  onReturn={() => {
                    this.initLogin();
                  }}
                />
                <div
                  style={{ marginTop: 30, marginLeft: -10, marginRight: -10 }}
                >
                  <SolidButton
                    color="#ff0039"
                    text="continue"
                    onClick={() => this.initLogin()}
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

export default LoginPage;
