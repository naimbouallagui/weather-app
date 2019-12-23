import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherList/>
    </div>
  );
}

export default App;



 class WeatherList extends React.Component {
  state = {
    weathers: [],
  }

  componentDidMount() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    // axios.get(`http://api.openweathermap.org/data/2.5/weather?appid=65f4d4e1cbcc165e658fbae6fc2baccb&q=Tunis`)
    axios.get(`http://api.weatherstack.com/current?access_key=c795544f1c369311ec4aee11a23524d8&query=New%20York`)
      .then(res => {
        const weathers = res.data;
        this.setState( weathers );
        console.log(weathers.request.type)
      })
  }

  render() {
    return (
      <div>
        <input
              type="text"
              name="state"
              className="mx-3 my-3"
            />
         <button type="button" >Find</button>   
      <ul className="list-unstyled">
        { Object.keys(this.state.weathers).map(weather => <li key={weather.id}>
        
        {/* {weather} */}
        
        {console.log(weather)}
        </li>)}
      </ul>
      </div>
    )
  }
}

// import React, { Component } from 'react';
// import axios from 'axios';

// import Header from './component/Header';
// import Input from './component/Input';
// import Weather from './component/Weather';



// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       weather: [],
//       temp: [],
//       clouds: []
//     };
//   }

//   getWeather = query => {
//     axios.get(`https://api.openweathermap.org/data/2.5/find?q=${query}&units=imperial&appid=65f4d4e1cbcc165e658fbae6fc2baccb
//     `)
//       .then(response => {
//         this.setState({
//           weather: response.data.list[0],
//           temp: response.data.list[0].main.temp,
//           clouds: response.data.list[0].weather[0].description
//         });
//       })
//       .catch(error => {
//         console.log('Error', error);
//       });
//   };

//   queryWeather = (event, cityName) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       cityName = event.target.value;
//       this.getWeather(cityName);
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div className='content'>
//           <Header />
//           <Input queryWeather={this.queryWeather} />
//         </div>
//         <Weather
//           city={this.state.weather.name}
//           temp={this.state.temp}
//           clouds={this.state.clouds} />
//       </div>
//     );
//   }
// }
