import React, { Component } from "react";
import style from "./index.css";

class FolderButton extends Component {
    render() {
        return(
            <div className={style.container}>
                <img src="/static/FolderIcon.png" className={style.folderIcon}/>
                <span className={style.name}>Rocket </span>
            </div>
        );
    }
}

export default FolderButton;