import React from 'react';
import ToDoActions from '../actions/ToDoActions'

class ToDoRemove extends React.Component {
  handleClick(e) {
    e.preventDefault();
    ToDoActions.remove($('#item-remove').val());
  }
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
};

export default ToDoRemove;
