import React, { Component } from "react";
import Header from "../components/Header";
import style from "./index.css";

class IndexPage extends Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
      </div>
    );
  }
}

export default IndexPage;
