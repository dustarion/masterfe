import React, { Component } from "react";
import Header from "../components/Header";
import style from "./index.css";
import SolidButton from "../components/SolidButton";

class IndexPage extends Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
        <section className={style.section} style={{ justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <h1 className={style.h2}>
              Use Master.
              <br />
              Study Faster.
            </h1>
            <span className={style.subtitle}>
              Get good grades without breaking yourself
            </span>
            <div style={{ width: 250, marginTop: 20 }}>
              <SolidButton
                color="black"
                text="get started for free"
                fontColor="white"
                href="/signup"
                fontSize={14}
                size="small"
              />
            </div>
          </div>
          <div style={{ flex: 1 }} />
        </section>
      </div>
    );
  }
}

export default IndexPage;
