import React from 'react';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {

  componentDidMount() {

  }

  render() {
    $("ul div:last-child").addClass("last-list-item");
    const { spots } = this.props;
    const spotItem = spots.map(spot => <SpotIndexItem key={spot.id} spot={spot} />);
    return (
        <div className="spot-item-grid">
          <ul className="ul">
            {spotItem}
          </ul>
        </div>
    );
  }
}

export default SpotIndex;
