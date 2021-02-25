import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  //에러가 발생하면 해당 메서드 호출
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  render() {
    if (this.state.error) return <div>에러가 발생했습니다.</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
