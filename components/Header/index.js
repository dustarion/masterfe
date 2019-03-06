import React, { Component } from "react";
import style from "./index.css";
import SolidButton from "../SolidButton";
import BorderedButton from "../BorderedButton";

class Header extends Component {
  render() {
    return (
      <div className={style.container}>
        <img src="/static/MasterLogoDetailed.png" className={style.logoIcon} />
        <div className={style.actionButtonContainer}>
          <SolidButton color="#ff0039" text="sign up" href="/login" />
          <BorderedButton
            color="#ff0039"
            text="sign up"
            href="/login"
            borderColor="white"
          />
        </div>
      </div>
    );
  }
}

export default Header;
