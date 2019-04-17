import React, { Component } from 'react';
import ReviewBox from "../components/reviewbox";

export default class Reviews extends Component {
    render() {
        return (
            <div>
                {this.props.reviews.map(x => <ReviewBox reviews={x} key={x}></ReviewBox>)}
            </div>
        );
    }

}