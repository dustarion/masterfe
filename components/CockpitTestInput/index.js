import React, { Component } from "react";
import style from "./index.css";

class CockpitTestInput extends Component {
  constructor(props) {
    super(props);
    this.state = { answer: "" };
  }

  componentDidMount() {
    document.getElementById("inputanswer").focus();
  }

  render() {
    return (
      <div className={style.container}>
        <input
          id="inputanswer"
          className={style.textInput}
          type="text"
          onChange={e => {
            this.setState({ answer: e.target.value });
          }}
        />
        <span className={style.subText}>type your answer above</span>
      </div>
    );
  }
}

export default CockpitTestInput;
