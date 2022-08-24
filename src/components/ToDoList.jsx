import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/ToDoList.css';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, remove, ...props }) {

  return (
    <ul className='todolist'>
      <TransitionGroup
        className='todolist'
      >
        {
          todos.map((el, index) => {
            return (
              <CSSTransition
                key={el.id}
                timeout={500}
                classNames='todo'
              >
                <ToDoItem
                  todo={todos[index]}
                  remove={remove}
                />
              </CSSTransition>
            )
          })
        }
      </TransitionGroup>
    </ul>
  );
}

export default ToDoList;