import React, { Component } from 'react';


class Admin extends Component {



  render() {

    const { tasks } = this.props
    console.log(tasks)
    let taskList = tasks.map((tasks, i) => {
      return(
        <div key={tasks._id} className="task-con">
          <div className="task-title"> {tasks.title} </div>
          <div className="for-whom"> for {tasks.forWhom} </div>
          <div className="task-text">{tasks.task}</div>
          <div className="buttons">
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>
      )
    })

    return (
      <div className="admin-control">
        <button className="add-task">Create Task</button>
        <div className="all-tasks">
          {taskList}
        </div>

      </div>
    );
  }
}

export default Admin;
