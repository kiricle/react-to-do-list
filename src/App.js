import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import './styles/App.css';

function App() {
  const date = new Date();

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Do exercise',
      description: 'Call the coach'
    },
    {
      id: 2,
      title: 'Meeting',
      description: 'Room 408, east 2 layer'
    },
    {
      id: 3,
      title: 'Movie',
      description: 'Take a bunch of flowers'
    }
  ]);

  const [modal, setModal] = useState(false);

  function createToDo(newToDo) {
    setTodos([...todos, newToDo])
    setModal(false)
  }

  function removeToDo(todo) {
    setTodos(todos.filter(el => el.id !== todo.id));
  }

  return (
    <>
      <MyButton style={{ margin: '0 26% 20px' }} onClick={() => setModal(true)}>Add new ToDo</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <ToDoForm create={createToDo} />
      </MyModal>
      <h1 className='todolist__title'>
        {date.toLocaleString('en-US',
          { year: 'numeric', day: 'numeric', weekday: 'long' })}
      </h1>
      {
        todos.length !== 0
          ? 
          <ToDoList remove={removeToDo} todos={todos} />
          :
          <h1
            style={{ textAlign: 'center' }}
          >
            There's no todos
          </h1>
      }
    </>
  );
}

export default App;
