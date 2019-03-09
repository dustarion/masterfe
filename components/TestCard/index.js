import React, { Component } from "react";
import style from "./index.css";
import CockpitTestInput from "../CockpitTestInput";

class TestCard extends Component {
  render() {
    return (
        <div className={style.container}>
            <div className={style.contentWrapper}>
                <h1>What is the main state in which an element’s atoms are in superposition?</h1>
            </div>
            <div>
                <CockpitTestInput />
            </div>
        </div>
    );
  }
}

export default TestCard;
