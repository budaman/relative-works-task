import React, { Component } from 'react';


class Admin extends Component {



handleEdit = (e) => {
  let id = e.currentTarget.id
  console.log(id)

  this.props.editId(id)

  this.props.toggleEdit()
}

  handleDelete = (e)=> {
    let id = e.currentTarget.id
    console.log(id)
    fetch('taskList', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "id" : id
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  }).then(data => {
    console.log(data)
  })
    this.props.refresh()
  }

  render() {
    const { tasks } = this.props
    let taskList = tasks.map((tasks, i) => {
      return(
        <div key={tasks._id} className="task-con">
          <div className="task-title"> {tasks.title} </div>
          <div className="for-whom"> for {tasks.forWhom} </div>
          <div className="task-text">{tasks.task}</div>
          <div className="buttons">
            <button
              className="edit"
              id={tasks.id}
              onClick={this.handleEdit}
              >Edit</button>
            <button
              className="delete"
              id={tasks.id}
              onClick={this.handleDelete}
              >Delete</button>
          </div>
          { tasks.isDone === false && <div className="isDoneConAdmin">
             <div id="isNotDone"> It's not finished yet.  </div>
           </div> }

           { tasks.isDone === true && <div className="isDoneCon ">
              <div id="isDone"> It's done</div>
            </div> }
        </div>
      )
    })



    return (
      <div className="admin-control">
        <button className="add-task"
          onClick={()=>{
          this.props.toggleCreateTask()
          }}
          >Create Task</button>
        <div className="all-tasks">
          {taskList}
        </div>

      </div>
    );
  }
}

export default Admin;
