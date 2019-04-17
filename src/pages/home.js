import React, { Component } from 'react';
import { courselist } from '../data/services/CourseService';
//import CourseBox from '../components/coursebox';
import { CourseBox } from "../redux/mappings/ComponentMappings";
import PubSub from 'pubsub-js';
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            clist: courselist
        };
    }

    componentDidMount() {
        PubSub.subscribe('courseupdate', (msg, data)=> {
            this.setState(this.state);
        })

    }
    render() {
        let code = this.state.clist.map((x) => <CourseBox course={x}></CourseBox>)
        return (
            <div>
                <h1><u>Course Offered</u></h1>
                {code}
            </div>
        );
    }


}