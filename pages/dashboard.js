import React, { Component } from "react";
import style from "./dashboard.css";
import Header from "../components/Header";

class DashboardPage extends Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
        <div className={style.menucard}>
            hello
        </div>
      </div>
    );
  }
}

export default DashboardPage;
