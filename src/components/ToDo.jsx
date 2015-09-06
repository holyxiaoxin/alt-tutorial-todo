var React = require('react');
var AltContainer = require('alt/AltContainer');
var ToDoStore = require('../stores/ToDoStore');
var ToDoActions = require('../actions/ToDoActions');

var ToDoList = React.createClass({
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
});

var ToDoAdd = React.createClass({
  handleClick(e) {
    e.preventDefault();
    ToDoActions.add($('#item-add').val());
  },
  render() {
    return(
      <div>
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="add">Add</label>
            <input type="text" className="form-control" id="item-add" placeholder="item"/>
          </div>
          <button type="submit" className="btn btn-default" onClick={this.handleClick}>Add</button>
        </form>
      </div>
    );
  }
});

var ToDoRemove = React.createClass({
  handleClick(e) {
    e.preventDefault();
    ToDoActions.remove($('#item-remove').val());
  },
  render() {
    return(
      <div>
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="add">Remove</label>
            <input type="text" className="form-control" id="item-remove" placeholder="item"/>
          </div>
          <button type="submit" className="btn btn-default" onClick={this.handleClick}>Remove</button>
        </form>
      </div>
    );
  }
});

var ToDo = React.createClass({
  // componentDidMount() {
  //   LocationStore.fetchLocations();
  // },

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
});

module.exports = ToDo;
