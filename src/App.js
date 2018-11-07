import React, { Component } from 'react';
import MapContainer from './MapContainer';
import ParkContainer from './ParkContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      park: []
    }
  }
  getParkContainer = async () => {
  try {
    const park = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
    const parkJson = await park.json();
    return parkJson
  } catch(err) {
    return err
  }
}

componentDidMount(){
  this.getParkContainer().then((park) => {
    console.log(park, ' these are parks');

  this.setState({park: park.features})
}).catch((err) => {
    console.log(err);
})
}

  render() {
    return (
    <div className="App">
        <h1> Welcome to DiskGolf Park Finder</h1>
        <div className="MapContainer">
        <MapContainer parks={this.state.park}/>
      </div>
        <div className="parkContainer" >
          <h2>Start Game Here</h2>
            <ParkContainer parks={this.state.park}/>
      </div>
        </div>
    );
  }
}

export default App;
