import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  renderWeather(cityData){
    console.log('cityData',cityData);
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const {lat, lon} = cityData.city.coord

    return (
      <tr key={name}>
        <td>
          <div>{name}</div>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart units='&deg;F' data={temps} color='orange'/>
        </td>
        <td>
          <Chart units='hPa' data={pressure} color='green'/>
        </td>
        <td>
          <Chart units='%' data={humidity} color='blue'/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hovert">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }


}

function mapStateToProps({weather}){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);