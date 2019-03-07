import React, { Component } from "react";
import style from "./index.css";
import SolidButton from "../SolidButton";
import BorderedButton from "../BorderedButton";
import { withRouter } from "next/router";
import Link from "next/link";

class Header extends Component {
  buttons() {
    switch (this.props.router.pathname) {
      case "/":
        return (
          <div className={style.actionButtonContainer}>
            <SolidButton color="#ff0039" text="sign up" href="/signup" />
            <BorderedButton
              color="black"
              text="login"
              href="/login"
              borderColor="#ff0039"
            />
          </div>
        );
      case "/login":
        return (
          <div className={style.actionButtonContainer}>
            <span className={style.captionText}>Already have an account?</span>
            <BorderedButton
              color="black"
              text="sign up"
              href="/signup"
              borderColor="#ff0039"
              size="medium"
            />
          </div>
        );
      default:
        return null;
    }
  }
  render() {
    return (
      <div className={style.container}>
        <Link href="/">
          <img
            src="/static/MasterLogoDetailed.png"
            className={style.logoIcon}
          />
        </Link>
        {this.buttons()}
      </div>
    );
  }
}

export default withRouter(Header);
