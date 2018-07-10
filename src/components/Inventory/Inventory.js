import React from 'react';

import fishRequests from '../../firebaseRequests/fishes';

import './Inventory.css';

class Inventory extends React.Component {
  state = {
    fishes: [],
  }

  componentDidMount () {
    fishRequests
      .getRequest()
      .then((fishes) => {
        this.setState({fishes: fishes});
        // could also do ({fishes})
      })
      .catch((err) => {
        console.error('error with fish get request', err);
      })
  }
  render () {
    const fishComponents = this.state.fishes.map((fish) => {
      return (
      <h2>{fish.name}</h2>
      );
    });
    return (
      <div className="Inventory">
        <h2>Inventory</h2>
        <ul className="fishes">
          {fishComponents}
        </ul>

      </div>
    );
  }
}

export default Inventory;