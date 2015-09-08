import alt from '../alt';
import ToDoActions from '../actions/ToDoActions';
import ToDoSource from '../sources/ToDoSource';

class ToDoStore {
  constructor() {
    this.toDoList = [];

    this.bindListeners({
      handleFetchToDo: ToDoActions.FETCH_TO_DO,
      handleUpdateToDo: ToDoActions.UPDATE_TO_DO,
      handleToDoFailed: ToDoActions.TO_DO_FAILED,
      handleRemove: ToDoActions.REMOVE,
      handleAdd: ToDoActions.ADD
    });

    this.exportAsync(ToDoSource);
  }

  handleUpdateToDo(todo) {
    this.toDoList = todo;
  }

  handleToDoFailed(errorMessage) {
    console.log(errorMessage);
  }

  handleFetchToDo() {
    this.toDoList = [];
  }

  handleAdd(todo) {
    this.toDoList.push(todo);
  }

  handleRemove(todo) {
    let index = this.toDoList.indexOf(todo);
    if (index > -1) {
      this.toDoList.splice(index, 1);
    }
  }
}

module.exports = alt.createStore(ToDoStore, 'ToDoStore');
