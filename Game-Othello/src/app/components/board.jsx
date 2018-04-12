import React from 'react'

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {color: "white"}
    this.colorChange = this.colorChange.bind(this)
  }

  colorChange(e) {
    e.preventDefault();
    this.state["color"] == "black" ? this.setState({color: "white"}) : this.setState({color: "black"})
    this.state["color"] == "black" ? e.currentTarget.style = "background-color: white" : e.currentTarget.style = "background-color: black";
  }

  render () {
    return (
        <div>
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
    )
  }
}

export default Board;
