import React from 'react';
import ToDoActions from '../actions/ToDoActions'

class ToDoAdd extends React.Component {
  handleClick(e) {
    e.preventDefault();
    ToDoActions.add($('#item-add').val());
  }
  render() {
    return(
      <div>
        <form className="form-inline">
          <div className="form-group">
            <input type="text" className="form-control" id="item-add" placeholder="item"/>
          </div>
          <button type="submit" className="btn btn-default" onClick={this.handleClick}>Add</button>
        </form>
      </div>
    );
  }
};

export default ToDoAdd;
