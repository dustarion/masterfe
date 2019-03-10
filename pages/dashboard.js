import React, { Component } from "react";
import style from "./dashboard.css";
import Header from "../components/Header";
import DashboardNavCard from "../components/DashboardNavCard";

class DashboardPage extends Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
        <div className={style.menucard}>
            <DashboardNavCard/>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
