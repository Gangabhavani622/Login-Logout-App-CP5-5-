// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {btnText: 'Login', message: 'Please Login'}

  onRenderButton = () => {
    const {btnText, message} = this.state
    if (btnText === 'Login' && message === 'Please Login') {
      this.setState({btnText: 'Logout', message: 'Welcome User'})
    } else {
      this.setState({btnText: 'Login', message: 'Please Login'})
    }
  }

  render() {
    const {btnText, message} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <div>
            <h1 className="heading">{message}</h1>
            <button
              className="button"
              type="button"
              onClick={this.onRenderButton}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
