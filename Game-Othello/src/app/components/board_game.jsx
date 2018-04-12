import React from 'react'
import Board from './board.jsx'

class BoardGame extends React.Component {

  constructor() {
    super()
    this.state = {pos: ""}
    this.colorChange = this.colorChange.bind(this)
  }

  colorChange(e) {
    e.preventDefault();
    this.setState({pos: "blue"})
    console.log(e.currentTarget);
    e.currentTarget.style["backgroundColor"] == "black" ? e.currentTarget.style = "background-color: white" : e.currentTarget.style = "background-color: black";
  }

  render () {
    return (
      <div className="overall-div">
        <div className="board">
          <Board />
        </div>
      </div>
    )
  }
}

export default BoardGame;
