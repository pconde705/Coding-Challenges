import React from 'react'

class BoardGame extends React.Component {

  constructor() {
    super()
    this.state = {pos: ""}
    this.colorChange = this.colorChange.bind(this)
  }

  colorChange(e) {
    e.preventDefault();
    this.setState({pos: "blue"})
  }

  render () {
    return (
      <div className="overall-div">
        <div className="board">
            <div className="square">
              <button onClick={this.colorChange}></button>
            </div>
        </div>
      </div>
    )
  }
}

export default BoardGame;
