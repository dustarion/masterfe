import React, { Component } from "react";
import style from "./login.css";
import Header from "../components/Header";
import BG from "../components/BG";

class LoginPage extends Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
        <BG />
        <div className={style.contentWrapper} />
      </div>
    );
  }
}

export default LoginPage;
