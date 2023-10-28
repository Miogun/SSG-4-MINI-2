import { useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function Todo() {

  const [todos, setTodos] = useState([
    { id: 1, checked: true, text: '자바스크립트 공부하기' },
    { id: 2, checked: false, text: '리액트 공부하기' },
    { id: 3, checked: false, text: '할일 목록 앱 만들기' }
  ]);

  const nextId = useRef(4);

  const insertTodo = text => {
    const newTodos = todos.concat({ id: nextId.current, checked: false, text });
    setTodos(newTodos);
    nextId.current ++;
  };
  const removeTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  const toggleCheck = id => {
    const newTodos = todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo);
    setTodos(newTodos);				
  };

  return (
    <div>
      <TodoTemplate>
        <TodoInsert insertTodo={insertTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} toggleCheck={toggleCheck} />
      </TodoTemplate>						⇐ 변경 함수를 props로 전달
    </div>
  );
}

export default Todo;
