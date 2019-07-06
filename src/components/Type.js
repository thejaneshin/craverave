import React from 'react';
import './animate.css';

const Type = ({ onPageChange }) => {
	return (
		<div className="animated fadeIn">
			<label className="f2 fw6 ph0 mh0" htmlFor="type">What type of food?</label>

      <div className="br1 pa1 mt5">
        <button
          onClick={() => onPageChange('decided')}>
          I know!
        </button>
      </div>
      <div className="br1 pa1 mv3">
        <button
          onClick={() => onPageChange('undecided')}>
          Not sure...
        </button>
      </div>

      <p onClick={() => onPageChange('price')} className="ma3 f6 fl link dim black db pointer">Back</p>
		</div>
	);
}

export default Type;