import React, { Component } from "react";
import Header from "../components/Header";
import style from "./index.css";
import SolidButton from "../components/SolidButton";
import Img from "react-image";
import LandingCard from "../components/LandingCard";

class IndexPage extends Component {
  state = {
    width: 0
  };

  componentDidMount() {
    this.setState({ width: window.innerWidth });
    window.addEventListener("resize", () => {
      this.setState({ width: window.innerWidth });
    });
  }

  render() {
    return (
      <div className={style.container}>
        <Header />
        <section
          className={style.section}
          style={{
            justifyContent: "center",
            background: "linear-gradient(#33255e, #db2776)"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <h1 className={style.h1}>
              Use Master.
              <br />
              Study Faster.
            </h1>
            <span className={style.subtitle}>
              Get good grades without breaking yourself.
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
          <div style={{ flex: 1, marginLeft: "5vw", marginTop: "5vw" }}>
            <Img src="/static/iPhone.png" className={style.img} />
          </div>
        </section>
        <section className={style.section} style={{ background: "#212121" }}>
          <div style={{ marginTop: 100, width: "100%" }}>
            <h1 className={style.h1}>How it works</h1>
            <div
              style={{
                marginTop: 100,
                flexDirection: this.state.width < 900 ? "column" : "row",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <LandingCard
                title="Cognitive Psychology"
                content="We've combined nine scientifically backed concepts from cognitive psychology that are shown to improve memory retention or deeper understanding of a subject."
              />
              <LandingCard
                title="Machine Learning"
                content="To implement such a learning system now would require a personal teacher. Machine learning helps us to automate this process and save costs which are passed down to our users."
              />
              <LandingCard
                title="Crowd Funded Information"
                content="Sets are available on Master, but Users are encouraged to share their study materials with other students."
              />
            </div>
          </div>
        </section>
        <section
          className={style.section}
          style={{
            justifyContent: "center",
            background: "linear-gradient(#db2776, #33255e)",
            alignItems: "center",
            height: 500,
            flexDirection: "column"
          }}
        >
          <h1 className={style.h1}>Sign up now</h1>
          <div style={{ marginTop: 50, width: 200 }}>
            <SolidButton
              color="#373981"
              text="sign up"
              href="/signup"
              shadow={true}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default IndexPage;
