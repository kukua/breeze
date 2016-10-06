import React from 'react'
import { Map, Marker, GoogleApiWrapper } from  'google-maps-react'

export class Container extends React.Component {

	onMarkerHover() {
		return alert('hey');
	}

	render() {
		return (
			<Map google={window.google} zoom={7}>
				<Marker
				    name={'theone'}
				    position={{lat: 37.778519, lng: -122.405640}} onMouseover={this.onMarkerHover}/>
			</Map>
		)
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyANRqq9BPcWmvt3TFzS8fdYiS7RbJZUMfw'
})(Container)
