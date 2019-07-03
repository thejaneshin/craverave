import React from 'react';
import './animate.css';

const Location = ({ onPageChange, onHandleInputChange, location }) => {
	return (
		<div className="measure animated fadeIn">
			<label className="f2 fw6 ph0 mh0" htmlFor="location">Location</label>
			<input
      	className="br3 b--light-silver pa2 mv5 input-reset ba bg-white w-100"
      	type="location"
        name="location"
        id="location"
        placeholder="address, neighborhood, city, state or zip"
        value={location}
        onChange={onHandleInputChange}
      />

      {
        location
          ? <p onClick={() => onPageChange('price')} className="f6 fr link dim black pointer">Next</p>
          : <p className="f6 fr link light-silver">Next</p>
      }
      
		</div>
	);
}

export default Location;