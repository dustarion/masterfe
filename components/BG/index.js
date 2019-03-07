import React, { Component } from "react";
import style from "./index.css";
import Img from "react-image";

class BG extends Component {
  render() {
    return (
      <div className={style.bgDiv}>
        <Img
          src={`https://images.unsplash.com/photo-1542584001-16c0852b84b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80`}
          className={style.bgImg}
        />
      </div>
    );
  }
}

export default BG;
