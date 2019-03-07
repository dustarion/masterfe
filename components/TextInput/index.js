import React, { Component } from "react";
import style from "./index.css";

class TextInput extends Component {
  render() {
    return (
      <div>
        <input
          className={style.input}
          placeholder="Email"
          onChange={x => {
            console.log(x.target.value);
          }}
        />
      </div>
    );
  }
}

export default TextInput;
