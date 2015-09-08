import React from 'react/addons';
const ShallowCompare = React.addons.shallowCompare;
import ToDoStore from '../stores/ToDoStore';

export default class ToDoList extends React.Component{
  shouldComponentUpdate(nextProps, nextState){
    if (!ToDoStore.isLoading()){
      return ShallowCompare(this, nextProps, nextState);
    }
    return true;
  }
  render() {
    if (ToDoStore.isLoading()) {
      console.log('loading')
      return (
        <div>
          <img src="ajax-loader.gif"/>
        </div>
      )
    }
    return (
      <div>
        <ul>
          {this.props.toDoList.map((todo, i) => {
            return (
              <li key={i}>{todo}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
