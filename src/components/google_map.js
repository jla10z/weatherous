import React, { Component } from 'react';

class GoogleMap extends Component {

	componentDidMount() {

		new window.google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		console.log(this.props.lat + " " + this.props.lon);
		// this can be reference with
		// this.refs.map
		return <div ref="map" />;
	}
}

export default GoogleMap;