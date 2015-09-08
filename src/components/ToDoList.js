import React from 'react/addons';
const ShallowCompare = React.addons.shallowCompare;
import ToDoStore from '../stores/ToDoStore';

export default class ToDoList extends React.Component{
  shouldComponentUpdate(nextProps, nextState){
      return ShallowCompare(this, nextProps, nextState);
  }
  render() {
    console.log(this.props.toDoList);
    if (ToDoStore.isLoading()) {
      console.log('todo store is loading');
      return (
        <div>
          Fetching from store
        </div>
      )
    }
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
}
