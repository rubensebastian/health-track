import React from "react";
import styles from "./layout.module.css";

export default class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tracker: true
        }
    }

    render() {
        return (
            <div className={styles.red}>
                Hello, World
            </div>);
    }
}