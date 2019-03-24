import React, {Component} from 'react';
import './addTaskForm.css'
import {connect} from "react-redux";

import {changeTask, fetchSendForm} from "../../store/actions";

class addTaskForm extends  Component{
    render(){
        return(
            <div className="addTaskForm">
                <input name='title' onChange={(e)=>this.props.onChange(e)} value={this.props.title}/>
                <input name='description' onChange={(e)=>this.props.onChange(e)} value={this.props.description}/>
                <select name="status" onChange={(e)=>this.props.onChange(e)} value={this.props.status}>
                    <option value="new">new</option>
                    <option value="in_progress">in_progress</option>
                    <option value="complete">complete</option>
                </select>
                <button onClick={()=>this.props.fetchSendForm(this.props)}>add task</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        title: state.title,
        description: state.description,
        status: state.status
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (event) => dispatch(changeTask(event)),
        fetchSendForm: (TaskForm) => dispatch(fetchSendForm(TaskForm))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(addTaskForm);