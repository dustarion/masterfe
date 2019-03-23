import React, {Component} from "react";
import style from "./login.css";
import Header from "../components/Header";
import BG from "../components/BG";
import TextInput from "../components/TextInput";
import SolidButton from "../components/SolidButton";
import axios from "axios";
import {BACKEND_URL} from "../Constants";
import firebase from "firebase";
import Router from "next/router";
import {animated, useSpring} from "react-spring";
import validator from "validator";

function Error(gProps) {
  const hasError = gProps.error.length > 0 ? true : false;
  const props = useSpring({
    opacity: hasError ? 1 : 0,
    height: hasError ? 20 : 0,
    from: {opacity: hasError ? 0 : 1, height: hasError ? 0 : 20}
  });
  return (
    <animated.div
      style={{
        ...props,
        margin: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <span style={{color: "red", fontFamily: "Lato", fontSize: 20}}>
        {gProps.error}
      </span>
    </animated.div>
  );
}

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  static getInitialProps({query}) {
    return {query};
  }

  initLogin() {
    const email = this.state.email;
    const pass = this.state.password;
    if (!validator.isEmail(email)) {
      this.setState({error: "Please enter a valid email"});
      return;
    }
    if (!validator.isLength(pass, {min: 6})) {
      this.setState({
        error: "Please enter a password that is longer than 6 characters"
      });
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(x => {
        axios
          .post(BACKEND_URL + "/auth/signin", {
            uid: x.user.uid,
            e: x.user.email
          })
          .then(({data}) => {
            if (data.error) {
              return this.setState({error: data.msg});
            }
            localStorage.setItem("token", data.token);
            localStorage.setItem("pfp", data.pfp);
            Router.push("/dashboard");
          })
          .catch(error => {
            this.setState({error: "An error occurred"});
          });
      })
      .catch(err => {
        this.setState({error: "An error occurred"});
      });
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (this.props.query.e != undefined || null) {
      this.setState({email: this.props.query.e});
      return;
    }
    if (token) {
      Router.push("/dashboard");
    }
  }

  render() {
    return (
      <div className={style.container}>
        <Header/>
        <BG/>
        <div className={style.contentWrapper}>
          <div className={style.sideLeft}>
            <div className={style.contentLeft}>
              <h1 className={style.h1login}>Login</h1>
              <h3 className={style.h3login}>Sign in with your email.</h3>
              <div>
                <TextInput
                  placeholder="Email"
                  onChangeText={text => {
                    this.setState({email: text});
                  }}
                  value={this.props.query.fsu ? this.props.query.e : undefined}
                  id="email"
                />
                <TextInput
                  placeholder="Password"
                  password={true}
                  onChangeText={text => {
                    this.setState({password: text});
                  }}
                  id="password"
                  onReturn={() => {
                    this.initLogin();
                  }}
                />
                <Error error={this.state.error}/>
                <div
                  style={{marginTop: 30, marginLeft: -10, marginRight: -10}}
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
          <div style={{flex: 1}}/>
        </div>
      </div>
    );
  }
}

export default LoginPage;
