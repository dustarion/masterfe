import React, { Component } from "react";
import style from "./login.css";
import Header from "../components/Header";
import BG from "../components/BG";
import TextInput from "../components/TextInput";
import SolidButton from "../components/SolidButton";
import axios from "axios";
import { BACKEND_URL } from "../Constants";
import firebase from "firebase";
import Router from "next/router";

class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };

  static getInitialProps({ query }) {
    return { query };
  }

  initLogin() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(x => {
        if (this.props.query.fsu) {
          axios
            .post(BACKEND_URL + "/redirectSignUp", {
              uid: x.user.uid,
              e: x.user.email,
              n: this.props.query.n
            })
            .then(({ data }) => {
              if (data.error) {
                return alert(data.msg);
              }
              localStorage.setItem("token", data.token);
              localStorage.setItem("pfp", data.pfp);
            });
        } else {
          axios
            .post(BACKEND_URL + "/localSignIn", {
              uid: x.user.uid,
              e: x.user.email
            })
            .then(({ data }) => {
              if (data.error) {
                return alert(data.msg);
              }
              localStorage.setItem("token", data.token);
              localStorage.setItem("pfp", data.pfp);
              Router.push("/dashboard");
            });
        }
      })
      .catch(err => {
        alert("An error occurred");
      });
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (this.props.query.e != undefined || null) {
      this.setState({ email: this.props.query.e });
    }
    if (token) {
      Router.push("/dashboard");
    }
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
                  value={this.props.query.fsu ? this.props.query.e : undefined}
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
