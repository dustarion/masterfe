import React, {Component} from "react";
import style from "./index.css";
import SolidButton from "../components/SolidButton";
import Img from "react-image";
import LandingCard from "../components/LandingCard";
import Header from "../components/Header"

class IndexPage extends Component {
  state = {
    width: 0
  };

  componentDidMount() {
    this.setState({width: window.innerWidth});
    window.addEventListener("resize", () => {
      this.setState({width: window.innerWidth});
    });
  }

  render() {
    return (
      <div className={style.container}>
        <Header/>
        <section
          className={style.section}
          style={{
            justifyContent: "center",
            background: "linear-gradient(#33255e, #db2776)",
            flexDirection: this.state.width < 600 ? "column" : "row",
            height: this.state.width < 600 ? "auto" : 700,
            paddingLeft: this.state.width < 600 ? "10vw" : 150,
            paddingRight: this.state.width < 600 ? "10vw" : 150
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: this.state.width < 600 ? 150 : 0
              }}
            >
              <h1 className={style.h1}>
                Use Master.
                <br/>
                Study Faster.
              </h1>
              <span className={style.subtitle}>
                Get good grades without breaking yourself.
              </span>
              <div style={{width: 250, marginTop: 20}}>
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
          </div>
          <div
            style={{
              marginLeft: this.state.width < 600 ? -150 : "5vw",
              marginTop: this.state.width < 600 ? "10vw" : 70,
              display: this.state.width < 600 ? "flex" : "",
              alignItems: "center",
              justifyContent: "center",
              marginRight: this.state.width < 600 ? -150 : 0
            }}
          >
            <Img
              src="/static/iPhone.png"
              className={style.img}
              style={{
                width:
                  this.state.width < 950
                    ? this.state.width < 600
                    ? "80vw"
                    : "50vw"
                    : 600
              }}
            />
          </div>
        </section>
        <section
          className={style.section}
          style={{
            background: "#212121",
            paddingLeft: this.state.width < 600 ? "10vw" : 150,
            paddingRight: this.state.width < 600 ? "10vw" : 150,
            paddingBottom: 100,
            height:
              this.state.width < 1300
                ? this.state.width < 940
                ? 1500
                : 1000
                : 700,
          }}
        >
          <div style={{marginTop: 100, width: "100%"}}>
            <h1 className={style.h1}>How it works</h1>
            <div
              style={{
                marginTop: 100,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
              }}
            >
              <div style={{display: "flex", justifyContent: "center"}}>
                {this.state.width < 940 ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginLeft: this.state.width < 940 ? -150 : 0,
                      marginRight: this.state.width < 940 ? -150 : 0
                    }}
                  >
                    <LandingCard
                      title="Cognitive Psychology"
                      content="We've combined nine scientifically backed concepts from cognitive psychology that are shown to improve memory retention or deeper understanding of a subject."
                    />
                  </div>
                ) : (
                  <LandingCard
                    title="Cognitive Psychology"
                    content="We've combined nine scientifically backed concepts from cognitive psychology that are shown to improve memory retention or deeper understanding of a subject."
                  />
                )}
                {this.state.width < 940 ? null : (
                  <LandingCard
                    title="Machine Learning"
                    content="To implement such a learning system now would require a personal teacher. Machine learning helps us to automate this process and save costs which are passed down to our users."
                  />
                )}
                {this.state.width < 1300 ? null : (
                  <LandingCard
                    title="Crowd Funded Information"
                    content="Sets are available on Master, but Users are encouraged to share their study materials with other students."
                  />
                )}
              </div>
              {this.state.width < 1300 ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: this.state.width < 940 ? -150 : 0,
                    marginRight: this.state.width < 940 ? -150 : 0
                  }}
                >
                  <LandingCard
                    title="Crowd Funded Information"
                    content="Sets are available on Master, but Users are encouraged to share their study materials with other students."
                  />
                </div>
              ) : null}
              {this.state.width < 940 ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: this.state.width < 940 ? -150 : 0,
                    marginRight: this.state.width < 940 ? -150 : 0
                  }}
                >
                  <LandingCard
                    title="Machine Learning"
                    content="To implement such a learning system now would require a personal teacher. Machine learning helps us to automate this process and save costs which are passed down to our users."
                  />
                </div>
              ) : null}
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
            flexDirection: "column",
          }}
        >
          <h1 className={style.h1}>Sign up now</h1>
          <div style={{marginTop: 50, width: 200}}>
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
