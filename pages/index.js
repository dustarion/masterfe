import React, { Component } from "react";
import { connect } from "react-redux";
import { updateEmail } from "../actions";

class IndexPage extends Component {
  render() {
    return <div>{JSON.stringify(this.props)}</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  updateEmail: email => dispatch(updateEmail(email))
});

export default connect(
  state => state,
  mapDispatchToProps
)(IndexPage);
