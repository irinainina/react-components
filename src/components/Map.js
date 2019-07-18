import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google}
      style={{width: '80%', height: '60%', position: 'relative', margin: '20px auto'}}
      initialCenter={{
            lat: 53.893009,
            lng: 27.567444
          }}
      className={'map'}
      zoom={11}>
        <Marker
          title={'Belarus'}
          name={'Minsk'}
          position={{lat: 53.893009, lng: 27.567444}} />        
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCvaIfWd-OuN9oFNCRTuUTbInrnllrw4ao')
})(MapContainer)