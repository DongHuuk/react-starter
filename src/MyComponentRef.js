import React, { useRef, useCallback } from 'react';

/*
    class MyComponentRef extends Component {
    id = 1;
    setId = (n) => {
        this.id = n;
    };

    printId = () => {
        console.log(this.id);
    };

    render() {
        return <div>MyComponentRef</div>;
    }
}
  */

const MyComponentRef = () => {
  const id = useRef(5);

  const callRenderingAfter = () => {
    console.log('call the callRenderingAfter');
  };

  const setId = useCallback((n) => {
    id.current = n;
    callRenderingAfter();
  }, []);

  const printId = () => {
    console.log(id.current);
  };

  return (
    <div>
      refsampel
      <input name="id" onKeyPress={(e) => setId(e.target.value)} />
      <button onClick={() => printId()}>보여주기</button>
    </div>
  );
};

export default MyComponentRef;
