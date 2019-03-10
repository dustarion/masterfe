import React, { Component } from "react";
import style from "./index.css";

class FolderButton extends Component {
  render() {
    return (
      <div className={style.container}>
        {/* <img src="/static/FolderIcon.png" className={style.folderIcon} /> */}
        <span className={style.gradientLeftBar} />
        <span className={style.name}>
          {this.props.title == undefined || null ? "Error" : this.props.title}
        </span>
      </div>
    );
  }
}

export default FolderButton;
