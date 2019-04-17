import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class CourseBox extends Component {
    render() {
        let url = "http://162.241.222.49:8894/rest-api/images/" + this.props.course.filename;
        let alt = this.props.course.modulename;
        let url2 = "/coursedetails/" + this.props.course.modulecode + "-" + this.props.course.price;
        return (
            <div>
                <div className="container mt-6">
                    <div className="media border p-6">
                        <img src={url}
                            alt={alt} className="mr-3 mt-3 rounded-circle" style={{ width: "60px" }} />
                        <div className="media-body">
                            <h4>{this.props.course.modulename}</h4>
                            <h5>Course Code :: {this.props.course.modulecode}</h5>
                            <p>{this.props.course.description}</p>
                            <h6>Price :: &#8377; {this.props.course.price}, Duration :: {this.props.course.duration} hours</h6>
                            <Link to={url2}><button className="btn btn-dark">Course Content</button></Link>
                            &nbsp;&nbsp;
                            <button className="btn btn-dark" onClick={() => { this.props.cartItem(this.props.course.modulename) }}>Add to Cart</button>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}