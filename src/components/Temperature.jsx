import React, { Component } from 'react'

export default class Temperature extends Component {

    state = {
        temperature:"",
        msg:"",
        msgColor:""
    }

    handleChange = (e) => {
        var printMsg ="";
        var colorMsg ="";
        if(e.target.value < 10){printMsg="It's cold ❄️"; colorMsg="blue"}
        if(e.target.value >= 10){printMsg="It's nice 🌼"; colorMsg="black"}
        if(e.target.value > 30){printMsg="It's warm ☀️"; colorMsg="red"}
        if(e.target.value == ""){printMsg=""; colorMsg=""}
        this.setState({temperature:e.target.value, msg:printMsg, msgColor:colorMsg})
    }

    render() {
        return (
            <div>
                <h1>Temperature</h1>
                <input
                type="number"
                name="temperature"
                value={this.state.temperature}
                onChange={this.handleChange}
                placeholder="Temperature in ºC"
                />
                <p style={{color:`${this.state.msgColor}`}}>{this.state.msg}</p>
            </div>
        )
    }
}


