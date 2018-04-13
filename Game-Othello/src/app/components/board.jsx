import React from 'react'

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {color: "white", whitePoints: 2, blackPoints: 2}
    this.colorChange = this.colorChange.bind(this)
  }

  colorChange(e) {
    e.preventDefault();
    this.state["color"] == "black" ? this.setState({color: "white"}) : this.setState({color: "black"})

    if (this.state["color"] == "black") {
      e.currentTarget.classList.add("tile-button-white")
      e.currentTarget.classList.remove("no-tile")
      let whiteCounter = this.state["whitePoints"]
      whiteCounter += 1
      this.setState({whitePoints: whiteCounter})
    } else {
      e.currentTarget.classList.add("tile-button")
      e.currentTarget.classList.remove("no-tile")
      let blackCounter = this.state["blackPoints"]
      blackCounter += 1
      this.setState({blackPoints: blackCounter})
    }
  }

  render () {
    let rows = [];
    for (var i = 0; i < 8; i++) {
      let rowID = `Row:${i+1}`
      let cell = []
      for (var idx = 0; idx < 8; idx++) {
        let cellID = `Row:${i+1}-Cell:${idx+1}`
        if ((i == 3 && idx == 3) || (i == 4 && idx == 4)) {
          cell.push(<td key={cellID} id={cellID}><div className="square">
                    <button className="tile-button-white" onClick={this.colorChange}></button>
                    </div></td>)
        } else if ((i == 3 && idx == 4) || (i == 4 && idx == 3)) {
          cell.push(<td key={cellID} id={cellID}><div className="square">
                    <button className="tile-button" onClick={this.colorChange}></button>
                    </div></td>)
        } else {
          cell.push(<td key={cellID} id={cellID}><div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                    </div></td>)
        }
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }

    return (
      <div>
        <div className="points-div">
          <p>BLACK : {this.state["blackPoints"]}</p>
          <p>WHITE : {this.state["whitePoints"]}</p>
        </div>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Board;
