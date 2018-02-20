import React from 'react';
import TaskListItem from './task_list_item.jsx';

class TaskList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {project_id: "", asana_token: ""}
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getProject(this.state["project_id"], this.state["asana_token"]);
    this.props.getTasks(this.state["project_id"], this.state["asana_token"]);
  }

  renderErrors() {
    if (this.props.projectErrors == undefined) {
      return ("")
    } else {
      return (
        <div>
          <h2>{this.props.projectErrors[0]['message']}</h2>
        </div>
      )
    }
  }


  render () {
    return (
      <div className="form-div">
        <p className="form-p">Type in your personal access token:</p>
        <input className="input-form" type="text"
          onChange={this.handleInput('asana_token')}
          placeholder="e.g. 0/ae295cd0c2a56m844e969c4te73z4367"></input>
        <p className="form-p">Type in your project ID:</p>
        <input className="input-form" type="text"
          onChange={this.handleInput('project_id')}
          placeholder="e.g. 931581952334457"></input>
        <button className="form-button" onClick={this.handleSubmit}>Get Tasks</button>
        <TaskListItem results={this.props.tasks} project={this.state["project_id"]} title={this.props.project}/>
        <br />
        {this.renderErrors()}
      </div>
    )
  }
}

export default TaskList;
