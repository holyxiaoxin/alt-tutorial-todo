var alt = require('../alt');

class ToDoActions {
  add(item) {
    $('#item-add').val('');
    this.dispatch(item);
  }

  remove(item) {
    $('#item-remove').val('');
    this.dispatch(item);
  }
}

module.exports = alt.createActions(ToDoActions);
