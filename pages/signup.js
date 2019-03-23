import React, {Component} from "react";
import style from "./signup.css";
import Header from "../components/Header";
import BG from "../components/BG";
import TextInput from "../components/TextInput";
import SolidButton from "../components/SolidButton";
import validator from "validator";
import {animated, useSpring} from "react-spring";
import firebase from "firebase";

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

class SignUpPage extends Component {
  state = {
    email: "",
    password: "",
    cfmPass: "",
    name: "",
    error: ""
  };

  initSignUp() {
    const email = this.state.email;
    const pass = this.state.password;
    const cfmpass = this.state.cfmPass;
    const name = this.state.name;
    if (!validator.isEmail(email)) {
      this.setState({error: "Please enter a valid email"});
      return;
    }
    if (!validator.isLength(name, {min: 1})) {
      this.setState({error: "Please enter a valid name"});
      return;
    }
    if (!validator.isLength(pass, {min: 6})) {
      this.setState({
        error: "Please enter a password that is longer than 6 characters"
      });
      return;
    }
    if (pass != cfmpass) {
      this.setState({error: "Confirm password is not the same as password"});
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
                "http://localhost:8080/signup?n=" +
                name +
                "&e=" +
                email
            })
              .then(() => {
                alert("email sent");
              });
          });
      })
      .catch(err => {
        this.setState({error: JSON.stringify(err)});
      });
  }

  render() {
    return (
      <div className={style.container}>
        <Header/>
        <BG/>
        <div className={style.contentWrapper}>
          <div className={style.sideLeft}>
            <div className={style.contentLeft}>
              <h1 className={style.h1login}>Sign up</h1>
              <h3 className={style.h3login}>Sign up with your email.</h3>
              <div>
                <TextInput
                  placeholder="Email"
                  onChangeText={text => {
                    this.setState({email: text});
                    this.setState({error: ""});
                  }}
                  id="email"
                />
                <TextInput
                  placeholder="Name"
                  onChangeText={text => {
                    this.setState({name: text});
                    this.setState({error: ""});
                  }}
                  id="name"
                />
                <TextInput
                  placeholder="Password"
                  password={true}
                  onChangeText={text => {
                    this.setState({password: text});
                    this.setState({error: ""});
                  }}
                  id="password"
                />
                <TextInput
                  placeholder="Confirm Password"
                  password={true}
                  onChangeText={text => {
                    this.setState({cfmPass: text});
                    this.setState({error: ""});
                  }}
                  id="cfmPass"
                  onReturn={() => {
                    this.initSignUp();
                  }}
                />
                <Error error={this.state.error}/>
                <div
                  style={{marginTop: 30, marginLeft: -10, marginRight: -10}}
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
          <div style={{flex: 1}}/>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
