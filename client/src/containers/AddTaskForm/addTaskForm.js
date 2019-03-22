import React, {Component} from 'react';
import './addTaskForm.css'

class addTaskForm extends  Component{
    render(){
        return(
            <div className="addTaskForm">
                <input onChange={this.props.changeTask} value={this.props.value}/>
                <button onClick={this.props.sendForm}>add task</button>
            </div>
        )
    }
}


export default addTaskForm;