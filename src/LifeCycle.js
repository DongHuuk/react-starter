import React, {Component} from 'react'

class LifeCycle extends Component{
    state = {
        number: 0,
        color: ''
    }

    myRef = '' //ref 설정할 부분

    // 생성자 메서드
    constructor(props){
        super(props)
        console.log('call - constructor')
    }

    // props를 받아 state와 동기화 시켜주는 메서드
    static getDerivedStateFormProps(nextProps, prevState){
        console.log('call - getDerivedStateFormProps')
        if(nextProps.color !== prevState.color){
            return { color : nextProps.color }
        }

        return null;
    }
    
    // 컴포넌트를 만들고 첫 렌더링을 다 마친 뒤 실행
    componentDidMount(){
        console.log('call - componentDidMount')
    }

    // props 혹은 state를 변경했을때 실행, return 값이 boolean 타입이여야 한다.
    // 메서드 내에서 this.state, this.props 접근 가능하고 새로운 props, state는 매개변수로 접근 가능하다.
    // 프로젝트 성능을 최적화할때 사용하는 듯
    shouldComponentUpdate(nextProps, nextState){
        console.log('call - shouldComponentUpdate')
        return nextState.number % 10 !== 4;
    }

    /* 
        컴포넌트를 DOM에서 제거할 때 실행 
        componentDidMount()에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야한다.
    */
    componentWillUnmount(){

    }

    componentWillMount(){
        console.log('call - componentWillMount')
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    // v16.3 이후에 생성된 메서드 
    // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
    // 이 메서드에서 반환되는 값은 세번재 값인 snapshot 값으로 전달받을 수 있다.
    // 대게 업데이트 직전의 값을 참고할 일이 있을때 활용 ( 스크롤바 위치 등 )
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('call - getSnapshotBeforeUpdate')
        if(prevProps.color !== prevState.color){
            return this.myRef.style.color
        }
        return null
    }

    /*
        리렌더링을 완료한 후 실행
        업데이트가 끝난 직후 DOM 관련 처리해도 무관
        getSnapshotBeforeUpdate에서 반환값이 있다면 여기서 snapshot으로 받을 수 있다. 
    */
    componentDidUpdate(prefProps, prevState, snapshot){
        console.log('call - componentDidUpdate')
        if(snapshot){
            console.log('업데이트 되기 직전 색상' + snapshot)
        }
    }

    // 렌더링 함수
    render() {
        console.log('render')

        const style = {
            color: this.props.color
        }

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef=ref}>{this.state.umber}</h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }


}

export default LifeCycle;
