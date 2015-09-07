import React from 'react';

class ToDoList extends React.Component{
  render() {
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
