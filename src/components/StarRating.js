import React, {useEffect} from 'react';
import './StarRating.css';

function StarRating({onStarClick, starRating, reset}) {
  const handleStarClick = (event) => {
    const stars = event.target.value;
    onStarClick(stars);
  }
  const restartStars = () => {
    document.getElementById(`star${starRating}`).checked = false;
    onStarClick(0);
  }
  const setRating = () => {
    document.getElementById(`star${starRating}`).checked = true;

  }
  useEffect(() => {
    if (starRating && reset) restartStars();
    if (starRating && !reset) setRating();
  },[reset, starRating]);
  return (
    <div className="rate">
        <span className="rating-text">Rating Filter: </span>
        <input type="radio" id="star5" name="rate" value="5" onClick={handleStarClick}/>
        <label htmlFor="star5" title="5 Stars">5 stars</label>
        <input type="radio" id="star4" name="rate" value="4" onClick={handleStarClick}/>
        <label htmlFor="star4" title="4 Stars">4 stars</label>
        <input type="radio" id="star3" name="rate" value="3" onClick={handleStarClick}/>
        <label htmlFor="star3" title="3 Stars">3 stars</label>
        <input type="radio" id="star2" name="rate" value="2" onClick={handleStarClick}/>
        <label htmlFor="star2" title="2 Stars">2 stars</label>
        <input type="radio" id="star1" name="rate" value="1" onClick={handleStarClick}/>
        <label htmlFor="star1" title="1 Star">1 star</label>
    </div>
  );
}

export default StarRating;