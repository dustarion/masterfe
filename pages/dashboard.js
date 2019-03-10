import React, { Component } from "react";
import style from "./dashboard.css";
import Header from "../components/Header";
import FolderButton from "../components/FolderButton";

class DashboardPage extends Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
        <div className={style.folderCard}>
            <span className={style.headerText}>Folders</span>\
            <FolderButton />
        </div>
      </div>
    );
  }
}

export default DashboardPage;
