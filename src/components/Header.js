import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import StarRating from './StarRating';

function Header({onTermChange, selectedMovie, onBackClick, onStarClick, starRating, reset}) {
  const onInputChange = (event) => {
    const { value } = event.target;
    onTermChange(value);
  }
  const handleBackClick = () => {
    onBackClick();
  }
  return (
    <div className="header">
      <div className="d-flex space-between">
        <div className="d-flex">
          { selectedMovie ? 
            <div onClick={handleBackClick}>
              <i className="fa fa-chevron-left header-button" aria-hidden="true"></i>
            </div>
            :
            <div></div>
          }
          <span className="header-name">Movie Theater</span>
        </div>
        <input className="search" name="term" placeholder="Movie Title" onChange={onInputChange} />
        { !selectedMovie ? 
          <StarRating
            onStarClick={onStarClick}
            starRating={starRating}
            reset={reset}
          />
          :
          <div className="rate"></div>
        }
      </div>
    </div>
  );
}

Header.propTypes = {
    onTermChange: PropTypes.func.isRequired
}

export default Header;