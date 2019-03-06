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
            borderWidth: 2,
            borderColor: this.props.borderColor,
            borderStyle: "solid"
          }}
        >
          <span
            className={style.text}
            style={{
              marginLeft:
                this.props.size == "small"
                  ? 30
                  : this.props.size == "medium"
                  ? 40
                  : 50,
              marginRight:
                this.props.size == "small"
                  ? 30
                  : this.props.size == "medium"
                  ? 40
                  : 50
            }}
          >
            {this.props.text}
          </span>
        </div>
      </Link>
    );
  }
}

export default BorderedButton;
