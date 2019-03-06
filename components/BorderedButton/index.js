import React, { Component } from "react";
import style from "./index.css";
import Link from "next/link";

class BorderedButton extends Component {
  render() {
    return (
      <Link href={this.props.href}>
        <div
          className={style.container}
          style={{
            background: this.props.color,
            borderWidth: 1,
            borderColor: this.props.borderColor,
            borderStyle: "solid"
          }}
        >
          <span className={style.text}>{this.props.text}</span>
        </div>
      </Link>
    );
  }
}

export default BorderedButton;
