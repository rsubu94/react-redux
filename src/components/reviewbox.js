import React, { Component } from "react";

export default class ReviewBox extends Component {
    render() {
        return (
            <div className="alert alert-danger" style={{ margin: "10px" }}>
                <h3>{this.props.reviews.name} reviewed {this.props.reviews.course}......</h3>
                <p style={{ color: "black", padding: "10px", fontStyle: "italic" }}>
                    {this.props.reviews.message}
                </p>
                <div style={{ textAlign: "right", color: "darkred" }}>
                    {this.props.reviews.reviewdate}</div>
            </div>

        )
    }
}