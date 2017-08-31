import React, { Component } from 'react';


class User extends Component {


  handleChange = (e) => {
    fetch('isDone', {
        method: 'put',
       headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          isDone: e.target.checked,
          id: e.target.id
        })
    })
    this.props.refresh()
  }

  render() {
    const { tasks, whologged } = this.props
    let taskList = tasks.filter(task => task.forWhom === whologged.username ).map((tasks, i) => { //
      return(
        <div key={tasks._id} className="task-con">
          <div className="task-title"> {tasks.title} </div>
          <div className="for-whom"> for {tasks.forWhom} </div>
          <div className="task-text">{tasks.task}</div>
          { tasks.isDone === false && <div className="isDoneCon">
             <div id="isNotDone"> It's not finished yet. Mark when it will be done. </div>
             <input id={tasks.id} onChange={this.handleChange} type="checkbox" checked={tasks.isDone} />
           </div> }

           { tasks.isDone === true && <div className="isDoneCon ">
              <div id="isDone"> It's done</div>
              <input id={tasks.id} onChange={this.handleChange} type="checkbox" checked={tasks.isDone} />
            </div> }

        </div>
      )
    })



    return (
      <div className="admin-control">
        <div className="all-tasks">
          {taskList}
        </div>

      </div>
    );
  }
}

export default User;
