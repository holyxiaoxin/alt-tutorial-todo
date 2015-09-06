var alt = require('../alt');
var ToDoActions = require('../actions/ToDoActions');

class ToDoStore {
  constructor() {
    this.toDoList = [];

    this.bindListeners({
      handleRemove: ToDoActions.REMOVE,
      handleAdd: ToDoActions.ADD
    });
  }

  handleAdd(todo) {
    this.toDoList.push(todo);
  }

  handleRemove(todo) {
    let index = this.toDoList.indexOf(todo);
    if (index > -1) {
      this.toDoList.splice(index, 1);
    }
    console.log(this.toDoList);
  }
}

module.exports = alt.createStore(ToDoStore, 'ToDoStore');
