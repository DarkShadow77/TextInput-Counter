import { Component } from 'react'
import './App.css'
import TextInput from './components/Input'

class App extends Component {

  state = {
    text: "",
    textLength: 0,
  }

  nameChangeHandler(newName) {
    let length = newName.length;
    this.setState({
      text: newName,
      textLength: length,
    })
  }

  render() {
    return (
      <>
        <div style={{display: "flex", justifyContent: "space-between", width: "80%"}}>
          <h2>Text Length: {this.state.textLength > 20 ? "Too Long" : "Too Short"}</h2>
          <h2>Word Count: {this.state.textLength}</h2>
        </div>
        <TextInput text={this.state.text} change={()=>this.nameChangeHandler(event.target.value)}/>
      </>
    );
  }
}

export default App
