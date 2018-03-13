import React from 'react';
import ReviewFormContainer from './review_container';
import ReviewDetail from './review_detail';

class SpotShow extends React.Component {

  componentDidMount() {
      this.props.fetchSpot(parseInt(this.props.match.params.spotId));

  }
  render() {

    const { spot, spotId, fetchSpot } = this.props;
    if(!spot) {
      return null;
    }
    const amen = spot.amenities.map(am =>
      <div>
        <div></div>
        <li className="amenit">{am}</li>
      </div>
    )
    console.log(this);
    return (
      <div className="spot-grid">
        <div className="spot-show">
          <img src={spot.img_url}></img>
        </div>
        <div className="show-heading">
          <span>{spot.room_type}</span>
          <h1>{spot.name}</h1>
          <div className="show-details">
            <img src={window.staticImages.people}/>
            <span>{spot.num_guests}</span>
            <img src={window.staticImages.door}/>
            <span>{spot.num_bedrooms}</span>
            <img src={window.staticImages.bed}/>
            <span>{spot.num_beds}</span>
            <img src={window.staticImages.bath}/>
            <span>{spot.num_bathrooms}</span>
          </div>
          <div className="show-description">
            <h3>The space</h3>
            <p>{spot.description}</p>
            <div className="show-amentities">
              <h3>Amenities</h3>
              <div className="amen">
                {amen}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
// <ReviewFormContainer />
// <ReviewDetail reviews={this.props.reviews}/>

export default SpotShow;
