import React, { Component } from "react";
import style from "./index.css";

class TextInput extends Component {
  render() {
    return (
      <div style={{ marginTop: 15 }}>
        <input
          className={style.input}
          placeholder={
            this.props.placeholder == null || undefined
              ? "Error"
              : this.props.placeholder
          }
          type={this.props.password ? "password" : "text"}
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
