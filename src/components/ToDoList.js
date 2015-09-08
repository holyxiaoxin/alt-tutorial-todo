import React from 'react';
import ToDoStore from '../stores/ToDoStore';

class ToDoList extends React.Component{
  render() {
    if (ToDoStore.isLoading()) {
      return (
        <div>
          Fetching from store
        </div>
      )
    }
    return (
      <ul>
        {this.props.toDoList.map((todo, i) => {
          return (
            <li key={i}>{todo}</li>
          );
        })}
      </ul>
    );
  }
};

export default ToDoList;
