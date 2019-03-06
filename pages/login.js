import React, { Component } from "react";
import style from "./login.css";
import Header from "../components/Header";

class LoginPage extends Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
      </div>
    );
  }
}

export default LoginPage;
