import React,{Component} from 'react';

export default class CourseContent extends Component{
    constructor(){
        super();
            console.log("Component Created")
        
    }
    render(){
        const {ccode} = this.props.match.params;
        let arr=[];
        arr=ccode.split('-');
        return(<div>
            <h1>Course Content will be rendered here </h1>
            <hr/>
            <h5>The course code is {arr[0]}</h5>
            <h5>The course price is {arr[1]}</h5>

            </div>

        )
    }
}