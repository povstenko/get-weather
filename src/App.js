import React from 'react';
import './App.css';
import InputTag from './component/setInput.js';

class  App extends React.Component  {

  state = {
    temp: undefined,
    humidity: undefined,
    temp_max: undefined,
    temp_min: undefined,
    pressure: undefined,
    city: undefined
  };
  
  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    console.log(city);

    let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2f340c581eae47ad00eea18ed2125a92&units=metrics`)
    let data = await url.json();
    console.log(data);
    this.setState(
      {
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        city: data.name,

        press: [
          {
            name: 'Freddie',
            text: 'Hello Freddie'
          },
          {
            name: 'Brian',
            text: 'Hello Brian'
          },
          {
            name: 'Roger',
            text: 'Hello Roger'
          },
          {
            name: 'John',
            text: 'Hello John'
          }
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <InputTag methodWeather = {this.getWeather}/>
        <div className="container">
        <div className="result">
        <h3>Forecast</h3>
          <p>City: {this.state.city}</p>
          <p>Temperature: {this.state.temp} °C</p>
          <p>Max temperature: {this.state.temp_max} °C</p>
          <p>Min temperature: {this.state.temp_min} °C</p>
          <p>Humidity: {this.state.humidity}</p>
          <p>Pressure: {this.state.pressure}</p>
        </div>
        </div>
      </div>
    );
  }
}

export default App;