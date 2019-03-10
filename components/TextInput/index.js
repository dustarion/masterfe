import React, { Component } from "react";
import style from "./index.css";

class TextInput extends Component {
  componentDidMount() {
    const field = document.getElementById(this.props.id);
    field.addEventListener("keydown", e => {
      if (e.keyCode === 13) {
        if (typeof this.props.onReturn === "function") {
          this.props.onReturn();
        }
      }
    });
  }
  render() {
    return (
      <div style={{ marginTop: 15 }}>
        <input
          value={
            typeof this.props.value === "string" ? this.props.value : undefined
          }
          id={this.props.id}
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
