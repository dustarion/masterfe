import React, { Component } from "react";
import style from "./login.css";
import Header from "../components/Header";
import BG from "../components/BG";
import TextInput from "../components/TextInput";
import SolidButton from "../components/SolidButton";
import axios from "axios";
import { BACKEND_URL } from "../Constants";

class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };

  initLogin() {
    const email = btoa(this.state.email);
    const password = btoa(this.state.password);
    axios
      .post(BACKEND_URL + "/llcllogin", { e: email, p: password })
      .then(({ data }) => {
        console.log(data);
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
                />
                <TextInput
                  placeholder="Password"
                  password={true}
                  onChangeText={text => {
                    this.setState({ password: text });
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
