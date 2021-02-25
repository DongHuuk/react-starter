import React, { useState } from 'react';

const EventPreactive = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 을 이 자리에 복사
      [e.target.name]: e.target.value, // 값 덮어쓰기
    };
    setForm(nextForm);
  };
  const onClick = (e) => {
    alert(username + ':' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자 이름"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="내용"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button type="button" onClick={onClick}>
        입력
      </button>
    </div>
  );
};

export default EventPreactive;
