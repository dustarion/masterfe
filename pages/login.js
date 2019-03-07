import React, { Component } from "react";
import style from "./login.css";
import Header from "../components/Header";
import BG from "../components/BG";
import TextInput from "../components/TextInput";

class LoginPage extends Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
        <BG />
        <div className={style.contentWrapper}>
          <div className={style.sideLeft}>
            <div>
              <h1 className={style.h1login}>Login</h1>
              <h3 className={style.h3login}>Sign in with your email.</h3>
              <div>
                <TextInput />
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
