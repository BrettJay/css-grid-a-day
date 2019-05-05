import React from "react"
import Canon from "./canon.module.scss"

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showGrid: false };
    this.toggleGrid = this.toggleGrid.bind(this);
  }

  toggleGrid() {
    this.setState(state => ({
      showGrid: !state.showGrid
    }))
  }

  render(props) {
    return (
      <div className={`${Canon.canvas} ${this.state.showGrid ? Canon.gridbg : ''}`}>
        <button onClick={this.toggleGrid}>
          {this.state.showGrid ? 'Hide canon' : 'Show canon'}
        </button>
        {this.props.children}
      </div>
    )
  }
}

export default Collection

