import React, { Component } from 'react';

export default class Offers extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="alert alert-info" style={{ margin: "30px", width: "80%" }}>
                    <h1>{this.props.offerMessage}</h1>
                    OfferCode : <b style={{ color: "darkred" }}>{this.props.code}</b>
                </div>
                <button className="btn btn-dark" onClick={this.props.changeOffer} style={{ margin: "30px" }}>Check Other Offers</button>
            </div>
        )
    }
}