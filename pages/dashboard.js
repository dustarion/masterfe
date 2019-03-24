import React, {Component} from "react";
import style from "./dashboard.css";
import Header from "../components/Header";
import FolderButton from "../components/FolderButton";
import SetsButton from "../components/SetsButton";
import axios from "axios";
import {BACKEND_URL} from "../Constants";
import Router from 'next/router'

class DashboardPage extends Component {
  state = {
    folders: null,
    sets: null
  };

  folders() {
    if (this.state.folders != null) {
      if (this.state.folders.length == 0) {
        return (
          <div>
            <span style={{color: "white"}}>no folders</span>
          </div>
        );
      }
      var x = [];
      this.state.folders.forEach(folderData => {
        x.push(<FolderButton title={folderData.title}/>);
      });
      return x;
    } else {
      return (
        <div>
          <span>Loading</span>
        </div>
      );
    }
  }

  sets() {
    if (this.state.sets != null) {
      if (this.state.sets.length == 0) {
        return (
          <div>
            <span style={{color: "white"}}>no sets</span>
          </div>
        );
      }
      var x = [];
      this.state.sets.forEach(setData => {
        x.push(<SetsButton title={setData.title} progress="0%"/>);
      });
      return x;
    } else {
      return (
        <div>
          <span>Loading</span>
        </div>
      );
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      Router.push("/login")
    }
    axios
      .post(BACKEND_URL + "/getUserSets", {token})
      .then(({data}) => {
        console.log(data);
        this.setState({sets: data});
      })
      .catch(err => {
        console.error(err);
      });

    // Get Folders
    axios
      .post(BACKEND_URL + "/getUserFolders", {token})
      .then(({data}) => {
        console.log(data);
        this.setState({folders: data});
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className={style.container}>
        <Header/>
        <div
          style={{
            flex: 1,
            display: "flex"
          }}
        >
          <div style={{background: "#212121"}}>
            <div className={style.folderCard}>
              <span className={style.headerText}>Folders</span>
              {this.folders()}
            </div>
          </div>
          <div className={style.contentWrapper}>
            <div className={style.recentCard}>
              <span className={style.headerText}>Study Sets</span>
              {this.sets()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
