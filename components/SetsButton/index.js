import React, { Component } from "react";
import style from "./index.css";


class SetsButton extends Component {
  render() {
    return (
      <div className={style.container}>
        {/* <img src="/static/FolderIcon.png" className={style.folderIcon} /> */}
        <div className={style.gradientLeftBar} />
        <span className={style.name}>
          {this.props.title == undefined || null ? "Error" : this.props.title}
        </span>

      </div>
    );
  }
}

export default SetsButton;
