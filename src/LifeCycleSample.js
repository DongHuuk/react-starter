import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref 설정할 부분

  // 생성자 메서드
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  /*
    컴포넌트가 마운트, 업데이트 될 때 호출
    props 값을 state와 동기화 시켜주는 메서드
  */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');

    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  /* 
    첫 렌더링을 끝마치고 호출된다.
    render() 이후에 호출되겠네 ? 
  */
  componentDidMount() {
    console.log('componentDidMount');
  }

  /*
    props or state가 변경이 될때 리렌더링을 결정 짓는 메서드
    return value가 boolean 타입이여야 한다.
  */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return nextState.number % 10 !== 4;
  }

  // 언마운트 될때 호출
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  /*
    render의 결과물이 브라우저에 적용되기 전에 호출
    return 값을 componentDidUpdate의 파라미터에서 받을 수 있다.
    */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }

    return null;
  }

  /*
    getSnapshotBeforeUpdate의 return 값을 받아올 수 있음 (snapshot)
    리렌더링 완료 후 실행
  */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    if (snapshot) {
      console.log('업데이트되기 직전 색상 - ' + snapshot);
    }
  }

  //렌더링
  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
