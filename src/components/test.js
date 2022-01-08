import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.state={
            count:0
        }
    }
    increament=()=>{
        this.setState({
            count:this.state.count+1
        });
    }
    render() {
        let {count}=this.state;
        return (
            <div>
                <span>this is test={count}</span> 
                <button onClick={this.increament}>+</button>
            </div>
        )
    }
}
