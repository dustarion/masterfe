import React, {Component} from "react";
import style from "./index.css";
import SolidButton from "../SolidButton";
import BorderedButton from "../BorderedButton";
import {withRouter} from "next/router";
import Link from "next/link";
import Img from 'react-image'

class Header extends Component {
  state = {
    width: 0
  };

  componentDidMount() {
    this.setState({width: window.innerWidth});
    window.addEventListener("resize", () => {
      this.setState({width: window.innerWidth});
    });
  }

  buttons() {
    switch (this.props.router.pathname) {
      case "/":
        return (
          <div className={style.actionButtonContainer}>
            {this.state.width < 600 ? (
              <div style={{display: "flex"}}>
                <BorderedButton
                  color="black"
                  text="menu"
                  href="/login"
                  borderColor="#ff0039"
                  shadow={true}
                />
              </div>
            ) : (
              <div style={{display: "flex"}}>
                <SolidButton
                  color="#ff0039"
                  text="sign up"
                  href="/signup"
                  shadow={true}
                />
                <BorderedButton
                  color="black"
                  text="Login"
                  href="/login"
                  borderColor="#ff0039"
                  shadow={true}
                />
              </div>
            )}
          </div>
        );
      case "/login":
        return (
          <div className={style.actionButtonContainer}>
            <span className={style.captionText}>Don't have an account?</span>
            <BorderedButton
              color="black"
              text="sign up"
              href="/signup"
              borderColor="#ff0039"
              size="medium"
              shadow={true}
            />
          </div>
        );
      case "/signup":
        return (
          <div className={style.actionButtonContainer}>
            <span className={style.captionText}>Already have an account?</span>
            <BorderedButton
              color="black"
              text="login"
              href="/login"
              borderColor="#ff0039"
              size="medium"
              shadow={true}
            />
          </div>
        );
      case "/dashboard":
        return (
          <div className={style.actionButtonContainer}>
            <Img src={'/static/fadedBar.png'} style={{height: 50, width: 50, borderRadius: '50%'}}/>
          </div>
        )
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
