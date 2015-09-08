import React from 'react/addons';
const ShallowCompare = React.addons.shallowCompare;
import ToDoActions from '../actions/ToDoActions'

class ToDoAdd extends React.Component {
  handleClick(e) {
    e.preventDefault();
    ToDoActions.add($('#item-add').val());
  }
  shouldComponentUpdate(nextProps, nextState){
    return ShallowCompare(this, nextProps, nextState);
  }
  render() {
    return(
      <div>
        <form className="form-inline">
          <div className="form-group">
            <input type="text" className="form-control" id="item-add" placeholder="item"/>
          </div>
          <button className="btn btn-default" onClick={this.handleClick}>Add</button>
        </form>
      </div>
    );
  }
};

export default ToDoAdd;
