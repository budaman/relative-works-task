import React, { Component } from 'react';


class ToggleEdit extends Component {

  state = {
    task: "",
    forWhom: "",
    title: "",
  }

  componentDidMount() {
    const { editId, tasks } = this.props

    let current = tasks.find(task => {
     return  task.id === editId
    })

    let forWhom = current.forWhom
    let task = current.task
    let title = current.title

    this.setState({
      task,
      title,
      forWhom
    })
  }

  handleClick = ()=> {
    const { task, forWhom, title } = this.state
    if(task!=="" && forWhom !=="" && title !=="") {
    fetch('taskList', {
        method: 'put',
       headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          task,
          forWhom,
          title,
          id: task+forWhom+title,
          oldId: this.props.editId
        })
    })
    this.props.refresh()
    this.props.toggleEdit()
  }else {
    alert('not everything is filled')
  } }

  render() {
    const { loginList, editId, tasks } = this.props

    let current = tasks.find(task => {
     return  task.id === editId
    })

    let forWhom = current.forWhom
    let task = current.task
    let title = current.title
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
              this.props.toggleEdit()
            }}
            > X </div>
          <div className="inputs">
            <div className="choose">Name of Task</div>
            <input  defaultValue={title} type="text"  onChange={(e)=>this.setState({title: e.target.value})} />
            <div className="choose">For whom is task</div>
            <select defaultValue={forWhom}  onChange={(e)=>this.setState({forWhom: e.target.value})}>
              <option value="" defaultValue>select user</option>
              {users}
            </select>
            <div className="choose">Describe the task</div>
          <textarea defaultValue={task} onChange={(e)=>this.setState({task: e.target.value})} ></textarea>
          <button
            className="create-task"
            onClick={this.handleClick}
            >Edit Task</button>
          </div>

        </div>
    );
  }
}

export default ToggleEdit;
