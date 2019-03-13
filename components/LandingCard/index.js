import React, { Component } from "react";
import style from "./index.css";

class LandingCard extends Component {
  render() {
    return (
      <div className={style.container}>
        <h2 className={style.title}>
          {this.props.title == null || undefined ? "Error" : this.props.title}
        </h2>
        <span className={style.content}>
          {this.props.content == null || undefined
            ? "Error"
            : this.props.content}
        </span>
      </div>
    );
  }
}

export default LandingCard;
