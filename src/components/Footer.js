import React, { Component } from "react";

export class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {mobile: "0995538249"}
    }
    componentDidMount() {
        console.log("Footer Rendered")
    }
    render() {
        return (
            <footer>{this.props.email} / {this.state.mobile}</footer>
        );
    }
}

/*export function Footer(props) {

    return (
        <footer>
            Contact: {props.email}
        </footer>
    )
}*/