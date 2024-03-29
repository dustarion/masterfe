import React, { Component } from "react";
import style from "./cockpit.css";
import Header from "../components/Header";
import TestCard from "../components/TestCard";

class CockpitPage extends Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
        <div className={style.contentWrapper}>
          <div className={style.centercard}>
            <TestCard q="test" />
          </div>
        </div>
      </div>
    );
  }
}

export default CockpitPage;
