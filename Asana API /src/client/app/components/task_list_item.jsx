import React from 'react';

class TaskListItem extends React.Component {

  constructor(props) {
    super(props)

    this.hideList = this.hideList.bind(this)
  }

  hideList(e) {
    e.preventDefault();
    e.currentTarget.parentNode.style = "display: none";
  }

  render () {
    if (this.props.results == undefined) {
      return ("")
    } else {
      return (
        <div className="list-div">
          <ul>
            {this.props.results.map((el, key) => (
              <li key={key} className="list-el">
                <a href={"https://app.asana.com/0/" + this.props.project + "/" + el.id}
                  target="_blank">{el.name}
                </a>
                <button className="list-button" onClick={this.hideList}>Hide</button>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
}

export default TaskListItem;
