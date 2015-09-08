import React from 'react';
import AltContainer from 'alt/AltContainer';
import ToDoStore from '../stores/ToDoStore';
import ToDoAdd from './ToDoAdd';
import ToDoRemove from './ToDoRemove';
import ToDoList from './ToDoList';

class ToDo extends React.Component{
  componentDidMount() {
    ToDoStore.fetchToDo();
  }

  render() {
    return (
      <div>
        <h1>To Do</h1>
        <ToDoAdd />
        <ToDoRemove />

        <h1>List</h1>
        <AltContainer store={ToDoStore}>
          <ToDoList/>
        </AltContainer>
      </div>
    );
  }
};

export default ToDo;
