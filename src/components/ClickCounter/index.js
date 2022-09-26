import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="cc-main-bg-container">
        <div className="cc-bg-container">
          <h1 className="cc-main-heading">
            The button has been clicked
            <span className="count-text"> {count} </span>
            times
          </h1>
          <p className="cc-count-info">
            Click the button to increase the count
          </p>
          <button type="button" className="button" onClick={this.increaseCount}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
