import React from 'react';
import './index.css';

class Loader extends React.Component {
  state = {
    rotate: 0,
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        rotate: this.state.rotate + 2
      }))
    }, 1)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return(
      <div className="center">
          <svg width="140" height="140">
            <g fill="none" strokeWidth="5">
              <circle r="25" cx="70" cy="70"
                 stroke="crimson"
                 strokeDasharray="23%"
                 strokeDashoffset="0"
                 transform={`rotate(${this.state.rotate} 70 70)`} />
              <circle r="55" cx="70" cy="70"
                 stroke="gold"
                 strokeDasharray="50%"
                 strokeDashoffset="0"
                 transform={`rotate(-${this.state.rotate} 70 70)`} />
            </g>
          </svg>
        </div>
    )
  }
}

export default Loader;