import React, { Component } from "react";
import style from "./index.css";

class SetsButton extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.gradientLeftBar} />
        <div className={style.contentWrapper}>
          <span className={style.title}>
            {this.props.title == undefined || null ? "Error" : this.props.title}
          </span>
        </div>
        <span className={style.subtitle}>
          {this.props.progress == undefined || null
            ? "Error"
            : this.props.progress}
        </span>
      </div>
    );
  }
}

export default SetsButton;
