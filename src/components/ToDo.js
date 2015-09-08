import React from 'react/addons';
const ShallowCompare = React.addons.shallowCompare;
import AltContainer from 'alt/AltContainer';
import ToDoStore from '../stores/ToDoStore';
import ToDoAdd from './ToDoAdd';
import ToDoRemove from './ToDoRemove';
import ToDoList from './ToDoList';

class ToDo extends React.Component{
  componentDidMount() {
    console.log('componentDidMount ToDo.js');
    ToDoStore.fetchToDo();
  }
  shouldComponentUpdate(nextProps, nextState){
      return ShallowCompare(this, nextProps, nextState);
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
