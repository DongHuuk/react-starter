import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  // 첫 렌더링 시에만 함수 생성

  f1 = () => {
    console.log("f1 실행");
  };

  const onInsert = useCallback(
    (e) => {
      console.log("onInsert");
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
    },
    [number, list]
  );
  // number와 list에 값이 변동이 있을경우에만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);
  // 특정 값이 바뀌었을때만 동작
  return (
    <dib>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값</b> : {avg}
      </div>
    </dib>
  );
};

export default Average;
