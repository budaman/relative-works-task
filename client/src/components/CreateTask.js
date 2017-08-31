import React, { Component } from 'react';


class CreateTask extends Component {

  state = {
    task: "",
    isDone: false,
    forWhom: "",
    title: "",
    id: ""
  }

  handleClick = ()=> {
    const { task, isDone, forWhom, title } = this.state
    if(task!=="" && forWhom !=="" && title !=="") {
    fetch('createTask', {
        method: 'post',
       headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          task,
          isDone,
          forWhom,
          title,
          id : task+forWhom+title
        })
    })
    this.props.refresh()
    this.props.toggleCreateTask()
  }else {
    alert('not everything is filled')
  } }
  render() {
    const { loginList } = this.props
    let users = loginList.filter( user => {
        return user.status === "user"
    })

    users = users.map( users => {
      return (
        <option key={users._id} value={users.username}>{users.username}</option>
      )
    })

    return (
        <div className="createTaskCon">
          <div
            className="closeButton"
            onClick={()=> {
              this.props.toggleCreateTask()
            }}
            > X </div>
          <div className="inputs">
            <div className="choose">Name of Task</div>
            <input type="text" onChange={(e)=>this.setState({title: e.target.value})} />
            <div className="choose">For whom is task</div>
            <select onChange={(e)=>this.setState({forWhom: e.target.value})}>
              <option value="" defaultValue>select user</option>
              {users}
            </select>
            <div className="choose">Describe the task</div>
          <textarea  onChange={(e)=>this.setState({task: e.target.value})} ></textarea>
          <button
            className="create-task"
            onClick={this.handleClick}
            >Add Task</button>
          </div>

        </div>
    );
  }
}

export default CreateTask;
