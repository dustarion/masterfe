import React, { Component } from "react";
import style from "./dashboard.css";
import Header from "../components/Header";
// import FolderButton from "../components/FolderButton";
import SetsButton from "../components/SetsButton";

class DashboardPage extends Component {
  folders() {
    return (
      <div>
        <FolderButton title="Rocket Science" />
      </div>
    );
  }

  sets() {
    return (
      <div className={style.setsRow}>
        <SetsButton title="Introduction to Organic Chemistry" progress="66%"/>
        <SetsButton title="Molecules" progress="66%"/>
        <SetsButton title="Flux Capacitor and Temporal Displacement" progress="66%"/>
      </div>
    );
  }

  render() {
    return (
      <div className={style.container}>
        <Header />
      </div>
    );
  }
}

export default DashboardPage;
