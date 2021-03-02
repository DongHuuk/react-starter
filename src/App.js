import React from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const array = [
    {
      id: 1,
      text: '첫걸음부터 시작하는 리액트 1',
      checked: true,
    },
    {
      id: 2,
      text: '첫걸음부터 시작하는 리액트 2',
      checked: false,
    },
    {
      id: 3,
      text: '첫걸음부터 시작하는 리액트 3',
      checked: false,
    },
  ];

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={array} />
    </TodoTemplate>
  );
};

export default App;
