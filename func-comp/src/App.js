import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello, World</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props) {
  return(
    <div className="App">
      <h2>Funtion Style Component</h2>
      <p>Number : {props.initNumber}</p>
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
  }
  render() {
    return(
      <div className="App">
        <h2>Class Style Component</h2>
        <p>Number : {this.state.number}</p>
        <input type="button" value="random" onClick={
          function() {
            this.setState({number:Math.random()})
          }.bind(this)
        }></input>
      </div>
    );
  }
}

export default App;
