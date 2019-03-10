import React, { Component } from "react";
import style from "./index.css";

class FolderButton extends Component {
    render() {
        return(
            <div className={style.container}>
                <span className={style.name}>Rocket Science</span>
            </div>
        );
    }
}

export default FolderButton;