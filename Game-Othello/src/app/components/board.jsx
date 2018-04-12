import React from 'react'

class Board extends React.Component {

  constructor(props) {
    super(props)
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
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="tile-button-white" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="tile-button" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="tile-button" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="tile-button-white" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
                <td>
                  <div className="square">
                    <button className="no-tile" onClick={this.colorChange}></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Board;
