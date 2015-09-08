import Immutable from 'immutable';
import alt from '../alt';
import ToDoActions from '../actions/ToDoActions';
import ToDoSource from '../sources/ToDoSource';

class ToDoStore {
  constructor() {
    this.toDoList = Immutable.List();
    this.bindListeners({
      handleFetchToDo: ToDoActions.FETCH_TO_DO,
      handleUpdateToDo: ToDoActions.UPDATE_TO_DO,
      handleToDoFailed: ToDoActions.TO_DO_FAILED,
      handleRemove: ToDoActions.REMOVE,
      handleAdd: ToDoActions.ADD
    });
    this.registerAsync(ToDoSource);
  }

  handleUpdateToDo(todo) {
    console.log('todostore: handleupdatetodo');
    this.toDoList = this.toDoList.merge(todo);
  }

  handleToDoFailed(errorMessage) {
    console.log(errorMessage);
  }

  handleFetchToDo() {
    console.log('todostore: handlefetchtodo');
    this.toDoList = Immutable.List();
  }

  handleAdd(todo) {
    this.toDoList = this.toDoList.push(todo);
  }

  handleRemove(todo) {
    let index = this.toDoList.indexOf(todo);
    if (index > -1) {
      this.toDoList = this.toDoList.remove(index);
    }
  }
}

export default alt.createStore(ToDoStore, 'ToDoStore');
