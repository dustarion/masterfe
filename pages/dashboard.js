import React, { Component } from "react";
import style from "./dashboard.css";
import Header from "../components/Header";
import FolderButton from "../components/FolderButton";
import SetsButton from "../components/SetsButton";

class DashboardPage extends Component {
  folders() {
    return <FolderButton title="Rocket shit" />;
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
              
              <SetsButton/>
              <SetsButton/>
            </div>
            
          </div>
          <div style={{ flex: 1, background: "grey" }}>
            everything else here
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
