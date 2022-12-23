import React, { Component } from "react";
import './TypeIn.css'

class TypeIn extends Component{

    constructor(){
        super();
        this.state={
            note: "Hell yeah typing!!"
        };
    }
    changeText(elt){
        this.setState({
            note: elt.target.value
        })
    }
    render(){
        return(
            <div className="typeIn">
                <div className="input">
                    <h2>Input</h2>
                    <textarea cols="300" rows="400" onChange={(elt)=>this.changeText(elt)} value={this.state.note} />
                </div>
                <div className="noteKeeper">
                    <h2>Pro Note</h2>
                    <div className="proNote">{this.state.note}</div>
                </div>
            </div>

        )
    }
}

export default TypeIn