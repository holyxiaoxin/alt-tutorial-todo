import alt from '../alt';

class ToDoActions {
  fetchToDo() {
    this.dispatch();
  }

  updateToDo(todo) {
    this.dispatch(todo);
  }

  toDoFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  add(item) {
    $('#item-add').val('');
    console.log(item)
    this.dispatch(item);
  }

  remove(item) {
    $('#item-remove').val('');
    this.dispatch(item);
  }
}

export default alt.createActions(ToDoActions);
