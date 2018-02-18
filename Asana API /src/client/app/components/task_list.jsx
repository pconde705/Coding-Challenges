import React from 'react';

class TaskList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {project_id: "", asana_token: ""}
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // const project = Object.assign({}, this.state)
    this.props.getTasks(this.state["project_id"], this.state["asana_token"])
  }

  render () {
    return (
      <div>
        <input type="text" onChange={this.handleInput('asana_token')} placeholder="Type in your personal access token"></input>
        <input type="text" onChange={this.handleInput('project_id')} placeholder="Type in your project id"></input>
        <button onClick={this.handleSubmit}>Get Tasks</button>
      </div>
    )
  }
}

export default TaskList;
