import React, {Component} from 'react';
import './task.css'
import {connect} from "react-redux";

import {fetchTask,deleteTaskById} from "../../store/actions";



class task extends  Component{

    componentDidMount() {
        this.props.fetchTask();
    }

    render(){
        const renderTask = () =>{
            return this.props.task.map((task,id) => {
                return <div key={id}>
                    <p>Title:{task.title}</p>
                    <h1>Task:{task.description}</h1>
                    <p>Status:{task.status}</p>
                    <button onClick={()=>this.props.deleteTaskById(task._id)}>delete task</button>
                </div>
            })
        };
        return(
            this.props.isLoading ? <div>Loading</div> :
                <div className="task">
                {renderTask()}
                </div>
        )
}
}

const mapStateToProps = (state)=>{
    return{
        task: state.task,
        isLoading: state.isLoading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTask: () => dispatch(fetchTask()),
        deleteTaskById:(id) => dispatch(deleteTaskById(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(task);