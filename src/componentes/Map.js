import React from 'react';
import {GoogleMap,
       withScriptjs,
       withGoogleMap} 
       from 'react-google-maps';

const Map = (props) =>{
  return(
    <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat:17.09622878825309, lng:-93.21128606137673 }}
    />
  );
}; 

export default withScriptjs(
  withGoogleMap(
    Map
  )
)