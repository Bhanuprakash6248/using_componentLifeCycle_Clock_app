import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  toggleBtn = () => {
    this.setState(prev => ({
      showClock: !prev.showClock,
    }))
  }

  render() {
    const {showClock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.toggleBtn}
        >
          {showClock ? 'hide clock' : 'show clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
