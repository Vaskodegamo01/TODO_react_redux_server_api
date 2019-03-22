import React, { Component } from 'react';
import AddTaskForm from './containers/AddTaskForm/addTaskForm';
import Task from './containers/Task/task';

class App extends Component {

  state = {
    taskForm:{value: 'add your task'},
    task:[
      {value: 'Создать папку', checkbox: true},
      {value: 'Создать файл', checkbox: false},
      {value: 'Сохранить файл в папку', checkbox: false}
    ]
  };

  clickHandler = () =>{
    let task = [...this.state.task];
    task.push({value:this.state.taskForm.value, checkbox:false});
    this.setState({task});
  };

  changeValue = (value) =>{
    let taskForm = this.state.taskForm;
    taskForm.value = value;
    this.setState({taskForm});
  };

  deleteTask = (id) =>{
    let task = [...this.state.task];
    task.splice(id, 1);
    this.setState({task});
  };

  render() {
    const renderTask = () =>{
      return this.state.task.map((task,id) => {
        return <Task
            key={id}
            value={task.value}
            checkbox={task.checkbox}
            delete={()=>this.deleteTask(id)}
        />
      })
    };
    return (
        <div className="App">
          <AddTaskForm
              changeTask={(e)=>this.changeValue(e.target.value)}
              sendForm={()=>this.clickHandler()}
              value={this.state.taskForm.value}
          />
          {renderTask()}
        </div>
    );
  }
}

export default App;