import ToDoActions from '../actions/ToDoActions';

var mockData = ['buy milk', 'buy chicken', 'buy cow']

var ToDoSource = {
  fetchToDo() {
    return {
      remote() {
        return new Promise((resolve, reject)=>{
          setTimeout(()=>{
            if (true) {
              resolve(mockData);
            } else {
              reject('Things have broken');
            }
          },1000);
        })
      },
      local() {
        return null;
      },
      success: ToDoActions.updateToDo,
      error: ToDoActions.toDoFailed,
      loading: ToDoActions.fetchToDo
    }
  }
}

export default ToDoSource
