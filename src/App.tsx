import React, { useState } from 'react'
import uuid from 'react-uuid';
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: string; //keyを指定するため
    checked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //新しいTodoを作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: uuid(),
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  }
  return (
    <div className="App">
      <div>
        <h2>Todoリスト with Typescript</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => handleChange(e)} className="inputText" />
          <input type="submit" value="作成" className="submitButton" />
        </form>
      </div>
      <ul className='todoList'>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.inputValue}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
