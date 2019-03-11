import React, { Component } from "react";
import style from "./index.css";

class SetsButton extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.gradientLeftBar}>
        </div>
        
        <span className={style.name}>
          {this.props.title == undefined || null ? "Error" : this.props.title}
        </span>

        <span className={style.progressText}>
          {this.props.progress == undefined || null ? "0%" : this.props.progress}
        </span>

      </div>
    );
  }
}

export default SetsButton;
