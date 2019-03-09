import React, { Component } from "react";
import style from "./index.css";

class CockpitTestInput extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render() {
        return (
                <div className={style.container}>
                {/* <form onSubmit={this.handleSubmit}> */}
                {/* <label> */}
                <input className={style.textInput} type="text" value={this.state.value} onChange={this.handleChange} />
                {/* </label> */}
                {/* <input type="submit" value="Submit" /> */}
                {/* </form> */}
            </div>
        );
    }
}

export default CockpitTestInput;
