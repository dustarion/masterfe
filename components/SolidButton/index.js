import React, { Component } from "react";
import style from "./index.css";
import Link from "next/link";

class SolidButton extends Component {
  render() {
    return (
      <Link href={this.props.href}>
        <div
          className={style.container}
          style={{ background: this.props.color }}
        >
          <span className={style.text}>{this.props.text}</span>
        </div>
      </Link>
    );
  }
}

export default SolidButton;
