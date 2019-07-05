import React from 'react';
import './animate.css';

const Type = ({ onPageChange, onHandleInputChange, type }) => {
	return (
		<div className="animated fadeIn">
			<label className="f2 fw6 ph0 mh0" htmlFor="type">What type of food?</label>
			<input
      	className="br3 b--light-silver pa2 mv5 input-reset ba bg-white w-100"
      	type="text"
        name="type"
        id="type"
        placeholder="food"
        value={type}
        onChange={onHandleInputChange}
        onKeyPress={(event => {
          if (event.key === "Enter") {
             onPageChange('results')
          }
        })}
      />
      <p onClick={() => onPageChange('price')} className="f6 fl link dim black db pointer">Back</p>
      <button
        onClick={() => onPageChange('results')}>
        Submit
      </button>
		</div>
	);
}

export default Type;