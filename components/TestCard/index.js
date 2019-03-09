import React, { Component } from "react";
import style from "./index.css";
import CockpitTestInput from "../CockpitTestInput";
import validator from "validator";

class TestCard extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <h1 className={style.titleh1}>
            {this.props.q == undefined || null
              ? "An error has occurred"
              : this.props.q}
          </h1>
        </div>
        <div>
          <CockpitTestInput />
        </div>
      </div>
    );
  }
}

export default TestCard;
