import React from 'react';
import './animate.css';

const UndecidedType = ({ onPageChange, onHandleInputChange, type }) => {
	return (
		<div className="animated fadeIn">
			<label className="f2 fw6 ph0 mh0" htmlFor="type">*Will change after testing*</label>

			<input
      	className="br3 b--light-silver pa2 mv5 input-reset ba bg-white w-100"
      	type="text"
        name="type"
        id="type"
        placeholder="food"
        onChange={onHandleInputChange}
        onKeyPress={(event => {
          if (event.key === "Enter") {
             onPageChange('results')
          }
        })}
      />


			<p onClick={() => onPageChange('type')} className="f6 fl link dim black db pointer">Back</p>
      <button
        onClick={() => onPageChange('results')}>
        Submit
      </button>
		</div>
	);
}

export default UndecidedType;