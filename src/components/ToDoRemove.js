import React from 'react/addons';
const ShallowCompare = React.addons.shallowCompare;
import ToDoActions from '../actions/ToDoActions'

class ToDoRemove extends React.Component {
  shouldComponentUpdate(nextProps, nextState){
    return ShallowCompare(this, nextProps, nextState);
  }
  handleClick(e) {
    e.preventDefault();
    ToDoActions.remove($('#item-remove').val());
  }
  render() {
    return(
      <div>
        <form className="form-inline">
          <div className="form-group">
            <input type="text" className="form-control" id="item-remove" placeholder="item"/>
          </div>
          <button className="btn btn-default" onClick={this.handleClick}>Remove</button>
        </form>
      </div>
    );
  }
};

export default ToDoRemove;
