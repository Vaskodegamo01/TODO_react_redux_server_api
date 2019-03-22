import React, {Component} from 'react';
import './task.css'

class task extends  Component{
    render(){
        return(
            <div className="task">
                <p>{this.props.value}</p>
                <input type="checkbox" defaultChecked={this.props.checkbox}/>
                <button onClick={this.props.delete}>delete task</button>
            </div>
        )
    }
}

export default task;