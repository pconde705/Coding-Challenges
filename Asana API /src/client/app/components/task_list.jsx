import React from 'react';

class TaskList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {project_id: ""}
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({project_id: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state)
    this.props.getTasks(project)
  }

  render () {
    return (
      <div>
        <input type="text" onChange={this.handleInput} placeholder="Type in your project id"></input>
        <button onClick={this.handleSubmit}>Get Tasks</button>
      </div>
    )
  }
}

export default TaskList;
