import React from 'react'
import Board from './board.jsx'

class BoardGame extends React.Component {

  constructor() {
    super()

  }

  render () {
    return (
      <div className="overall-div">
        <div className="board">
          <h1>Othello</h1>
          <Board />
        </div>
      </div>
    )
  }
}

export default BoardGame;
