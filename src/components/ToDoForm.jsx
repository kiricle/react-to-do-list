import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

function ToDoForm({ create }) {
  const [todo, setTodo] = useState({ title: '', description: '' });

  function addNewTodo(e) {
    e.preventDefault();
    const newToDo = {
      ...todo, id: Date.now()
    }
    create(newToDo);
    setTodo({ title: '', description: '' })
  }

  return (
    <form>
      <h2 style={{color: '#C5E947'}}>Add new ToDo</h2>
      <MyInput
        value={todo.title}
        onChange={e => setTodo({ ...todo, title: e.target.value })}
        type='text'
        placeholder='Title'
      />
      <MyInput
        value={todo.description}
        onChange={e => setTodo({ ...todo, description: e.target.value })}
        type='text'
        placeholder='Decription'
      />
      <MyButton onClick={addNewTodo}>+</MyButton>
    </form>
  );
}

export default ToDoForm;