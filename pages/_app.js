import React from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../store";
import Head from "next/head";
import "./app.global.css";
import firebase from "firebase";

class MasterFE extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyAcYSb9fvk2vUiRhavsKlrcrpnyFKtzXTQ",
      authDomain: "master-eb220.firebaseapp.com",
      databaseURL: "https://master-eb220.firebaseio.com",
      projectId: "master-eb220",
      storageBucket: "master-eb220.appspot.com",
      messagingSenderId: "1086655103908"
    };
    firebase.initializeApp(config);
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Lato:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />
          <title>Master</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MasterFE);
