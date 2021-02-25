import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input2.focus();
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
          ref={(ref) => (this.input2 = ref)}
        ></input>
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
