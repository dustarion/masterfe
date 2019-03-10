import React, { Component } from "react";
import style from "./dashboard.css";
import Header from "../components/Header";
import FolderButton from "../components/FolderButton";
import SetsButton from "../components/SetsButton";

class DashboardPage extends Component {
  folders() {
    return (
      <div>
        <FolderButton title="Rocket Science" />
        <FolderButton title="Cognitive Psychology" />
        <FolderButton title="Quantum Physics" />
      </div>
    );
  }

  sets() {
    return (
      <div>
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
        <div
          style={{
            flex: 1,
            display: "flex"
          }}
        >
          <div>
            <div className={style.folderCard}>
              <span className={style.headerText}>Folders</span>
              {this.folders()}
            </div>
            
          </div>
          <div className={style.contentWrapper}>
            <div className={style.recentCard}>
              <span className={style.headerText}>In Progress</span>
              {this.sets()}
              <span className={style.headerText}>Last Week</span>
              {this.sets()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
