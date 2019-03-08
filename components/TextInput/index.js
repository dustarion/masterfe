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
            try {
              this.props.onChangeText(x.target.value);
            } catch (error) {
              console.log(error);
            }
          }}
        />
      </div>
    );
  }
}

export default TextInput;
