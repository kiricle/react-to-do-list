import React from 'react';
import '../styles/ToDoItem.css';
import MyButton from './UI/button/MyButton.jsx';


function ToDoItem({ todo, remove }) {
  return (
    <li className='todolist-item'>
      <div>
        <h2 className='todolist-item__title'>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
      <MyButton onClick={() => remove(todo)}>Видалити</MyButton>
    </li>
  );
}

export default ToDoItem;