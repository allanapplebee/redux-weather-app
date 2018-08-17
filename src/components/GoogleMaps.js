import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    //new google....Map creates an embedded map. takes a ref to an html element (this.refs.map)
    //as a place to render the embedded map. This is because googlemaps doesn't know what react
    //is, so need to do this to integrate it
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat, //lat and lon come back from the weather api
        lng: this.props.lon //google calls it lng, weahter api lon, hence hte diff here
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
