import React, { Component } from 'react';
import AddTaskForm from './containers/AddTaskForm/addTaskForm';
import Task from './containers/Task/task';

class App extends Component {
  render() {
    return (
        <div>
          <AddTaskForm/>
          <Task/>
        </div>
    );
  }
}
export default App;