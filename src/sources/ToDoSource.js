import ToDoActions from '../actions/ToDoActions';

var mockData = ['buy milk', 'buy chicken', 'buy cow']

var ToDoSource = {
  fetchToDo() {
    console.log('source: fetchtodo');
    return {
      remote() {
        console.log('source: remote');
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
