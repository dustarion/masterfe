import React, { Component } from "react";
import Header from "../components/Header";
import style from "./index.css";
import axios from "axios";

class IndexPage extends Component {
  componentDidMount() {
    axios
      .post("http://localhost:8080/post", { omg: "damnnnnnn" })
      .then(({ data }) => console.log(data));
  }
  render() {
    return (
      <div className={style.container}>
        <Header />
      </div>
    );
  }
}

export default IndexPage;
