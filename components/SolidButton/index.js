import React, { Component } from "react";
import style from "./index.css";
import Link from "next/link";

class SolidButton extends Component {
  render() {
    if (typeof this.props.onClick === "function") {
      return (
        <div
          className={style.container}
          onClick={() => this.props.onClick()}
          style={{ background: this.props.color }}
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
      );
    } else {
      return (
        <Link href={this.props.href}>
          <div
            className={style.container}
            style={{ background: this.props.color }}
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
}

export default SolidButton;
