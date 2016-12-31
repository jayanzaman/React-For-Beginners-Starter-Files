import React from 'react';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish}/>
      </div>
      )
  }
}

export default Inventory;
