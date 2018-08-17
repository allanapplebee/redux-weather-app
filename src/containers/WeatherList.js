import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
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
    );
  }
}

//using mapStateToProps here instead of mapDispatchToProps as mapState is used to copy part of app state
//and put it in component props
//mapDispatch is used to disseminate an action to reducers Used to assign and action into component props

function mapStateToProps({ weather }) { //destructuring weather from state
  //return { weather: state.weather } using weather as key ehre to match key in rootReducer
  return { weather }; //es6 = weather: weather
}

export default connect(mapStateToProps)(WeatherList);
