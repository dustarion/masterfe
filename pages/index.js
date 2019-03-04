import React, { Component } from "react";
import { connect } from "react-redux";

class IndexPage extends Component {
  render() {
    return <div>{JSON.stringify(this.props)}</div>;
  }
}

export default connect(state => state)(IndexPage);
