import axios from "axios";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherList />
    </div>
  );
}

export default App;

class WeatherList extends React.Component {
  state = {
    weathers: null,
    query: "",
    error: false,
    loading: false
  };

  getWeather = () => {
    const { query } = this.state;
    this.setState({ loading: true });
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=c795544f1c369311ec4aee11a23524d8&query=${query}`
      )
      .then(res => {
        const weathers = res.data;

        if (weathers.success === false) {
          this.setState({ error: true, loading: false });
        } else this.setState({ weathers, error: false, loading: false });
      });
  };

  displayWeather = () => {
    const { weathers } = this.state;
    if (!weathers) return null;
    return (
      <ul className="list-unstyled">
        <li>
          {weathers.location.name}
          {", "}
          {weathers.location.country}
        </li>
        <li>Localtime: {weathers.location.localtime}</li>
        <li>Temperature: {weathers.current.temperature} °</li>
        <li>Description: {weathers.current.weather_descriptions}</li>
        <img src={weathers.current.weather_icons} alt="weather icon"/> 
      </ul>
    );
  };

  displayError = () => <p>error! try again!</p>;
  
  render() {
    const { error, query, loading } = this.state;
    return (
      <div>
        <input
          type="text"
          name="query"
          value={query}
          onChange={e => this.setState({ query: e.target.value })}
          className="mx-3 my-3"
        />
        <button type="button" onClick={this.getWeather}>
          Find
        </button>
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          this.displayError()
        ) : (
          this.displayWeather()
        )}
      </div>
    );
  }
}
