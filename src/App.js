import React from 'react';
import './App.css';
import InputTag from './component/setInput.js';

class  App extends React.Component  {

  state = {
    temp: undefined,
    city: undefined
  };
  getWeather = async (e) => {
    e.preventDefault();
    console.log("Hello");
    let url = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=2f340c581eae47ad00eea18ed2125a92&units=metrics')
    let data = await url.json();
    console.log(data);
    this.setState(
      {
        temp: data.main.temp,
        city: data.name
      }
    )
  }

  render() {
    return (
      <div className="App">
        <InputTag methodWeather = {this.getWeather}/>
        <div className="container">
          <h3>Forecast</h3>
          <p>City: {this.state.city}</p>
          <p>Temperature: {this.state.temp}</p>
        </div>
      </div>
    );
  }
}

export default App;