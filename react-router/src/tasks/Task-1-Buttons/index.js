import React from 'react';
import './index.css';

const ColorVariable = ({ className="theme-preview", color, radius, height, text, onClick = () => console.log("Some action") }) => (
  <button
    className={`${color} ${className}`}
    style={{ borderRadius: `${radius}px`, height: `${height}px` }}
    onClick={onClick}
  >
    { text || null }
  </button>
);

class ButtonGenerator extends React.Component {
  constructor() {
    super();

    this.colors1 = ["orange", "turquoise", "yellow"];
    this.colors2 = ["orange-light", "turquoise-light", "yellow-dark"];
    this.defaultState = {
      color1: null,
      color2: null,
      height: 35,
      radius: 0,
    }

    this.state = {...this.defaultState};

    this.handleColorClick = this.handleColorClick.bind(this);
    this.handleHeight = this.handleHeight.bind(this);
    this.handleRaius = this.handleRaius.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleColorClick(event, colorNum) {
    this.setState({
      [colorNum]: event
    });
  }

  handleRaius(event) {
    this.setState({
      radius: event.target.value
    });
  }

  handleHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  handleReset() {
    this.setState(this.defaultState);
  }

  handleResult() {
    let color1 = this.state.color1;
    let color2 = this.state.color2;
    let height = this.state.height;
    let radius = this.state.radius;
    let result;

    if(!color1 && !color2) return "";
    else if(color1 && color2) result = `${color1}-${color2}`;
    else if(color1 && !color2) result = color1;
    else if(color2 && !color1) result = color2;

    return (
      <div>
        <h2>Result</h2>
          <ColorVariable className="result" color={result} radius={radius} height={height} text="New Button" />
      </div>
    )
  }

  render() {
    const result = this.handleResult();

    return(
      <div className="flexButtons">
        <div>
          <h2>Color #1</h2>
          { 
            this.colors1.map((item, i) => <ColorVariable key={i} color={item} onClick={() => this.handleColorClick(item, "color1")} />)
          }

          <h2>Color #2 (optional)</h2>
          { 
            this.colors2.map((item, i) => <ColorVariable key={i} color={item} onClick={() => this.handleColorClick(item, "color2")} />)
          }

          <h2>Height: {this.state.height}px</h2>
          <input name="height" type="range" value={this.state.height} min="25" max="50" onChange={this.handleHeight} />

          <h2>Border radius: {this.state.radius}px</h2>
          <input name="radius" type="range" value={this.state.radius} min="0" max="15" onChange={this.handleRaius} />

          <button className="reset" onClick={this.handleReset}>Reset</button>  
        </div>

        <div>
          {result}
        </div>
      </div>
    )
  }
}

export default ButtonGenerator;
