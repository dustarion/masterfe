import React, { Component } from "react";
import style from "./index.css";
import CockpitTestInput from "../CockpitTestInput";
import SolidButton from "../SolidButton";
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
        <div className={style.inputArea}>
          <CockpitTestInput />
          <div>
          <SolidButton
            color="#ff0039"
            text="continue"
            size="small"
          />
          <SolidButton
            color= "transparent"
            text="don't know"
            size="small"
          />
          </div>
        </div>
      </div>
    );
  }
}

export default TestCard;
