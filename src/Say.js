import React, { useState } from 'react';

const Say = () => {
  //functional Component
  //usaState 인자에는 상태 초깃값을 넣어준다. 함수형에서는 객체가 아니어도 괜찮다.
  const [message, setMessage] = useState('초기값');
  const onClickEvent = () => setMessage('안녕하세요!');
  const onClickLeace = () => setMessage('안녕히가세요!');

  const [color, setColor] = useState('black');

  const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false },
  ];

  const [value, setValue] = useState(array);

  const object = { a: 1, b: 2, c: 3 };
  const nextObject = { ...object, b: 2 };

  const f1 = () => {
    let nextArray = array.concat({ id: 4, value: false });
    nextArray.filter((iter) => iter.id == 2);
    nextArray.map((item) => (item.id == 1 ? (item['value'] = 'false') : item));

    setValue(nextArray);
  };

  return (
    <div>
      <button onClick={onClickEvent}>입장</button>
      <button onClick={onClickLeace}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
      <button
        style={{ color: 'black' }}
        onClick={() => {
          setMessage('초기값');
          setColor('black');
        }}
      >
        초기화{' '}
      </button>

      <h1>{JSON.stringify(value)}</h1>
      <button onClick={f1}> 배열 </button>
    </div>
  );
};

export default Say;
