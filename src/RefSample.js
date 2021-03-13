import React, { Component } from 'react'

class RefSample extends Component{

    input = React.createRef();

    state = {
        username: '',
        message: ''
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    onClick = () => {
        alert(this.state.username + this.state.message)
        this.setState({
            username: '',
            message: ''
        })
    }

    onKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.onClick()
            this.input.current.focus();
        }
    }

    render() {
        return(
            <div>   
                <input
                ref = {this.input} 
                type="text"
                value={this.state.username}
                name="username"
                onChange={this.handleUsername}
                ></input>
                <input
                type="text"
                value={this.state.message}
                name="message"
                onChange={this.handleMessage}
                onKeyPress={this.onKeyPress}
                ></input>
                <button
                type="button"
                onClick={this.onClick}
                >확인</button>
            </div>
        )
    }

}

export default RefSample;