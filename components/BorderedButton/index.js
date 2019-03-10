import React, { Component } from "react";
import style from "./index.css";
import Link from "next/link";

class BorderedButton extends Component {
  state = {
    shadow: ""
  };
  render() {
    if (typeof this.props.onClick === "function") {
      return (
        <div
          className={style.container}
          onClick={() => this.props.onClick()}
          style={{
            background: this.props.color,
            boxShadow: this.state.shadow,
            borderColor: this.props.borderColor,
            borderWidth: 2,
            borderStyle: "solid"
          }}
          onMouseEnter={() => {
            if (this.props.shadow) {
              this.setState({ shadow: "1px 1px 2px gray" });
            }
          }}
          onMouseLeave={() => {
            this.setState({ shadow: "" });
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
                  : 50,
              fontSize:
                typeof this.props.fontSize === "undefined"
                  ? 16
                  : this.props.fontSize,
              color:
                typeof this.props.fontColor === "undefined"
                  ? "white"
                  : this.props.fontColor
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
            style={{
              background: this.props.color,
              boxShadow: this.state.shadow,
              borderColor: this.props.borderColor,
              borderWidth: 2,
              borderStyle: "solid"
            }}
            onMouseEnter={() => {
              if (this.props.shadow) {
                this.setState({ shadow: "1px 1px 2px gray" });
              }
            }}
            onMouseLeave={() => {
              this.setState({ shadow: "" });
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
                    : 50,
                fontSize:
                  typeof this.props.fontSize === "undefined"
                    ? 16
                    : this.props.fontSize,
                color:
                  typeof this.props.fontColor === "undefined"
                    ? "white"
                    : this.props.fontColor
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

export default BorderedButton;
