import React from 'react';
import './animate.css';

const Category = ({ onPageChange, onHandleInputChange, category }) => {
	return (
		<div className="measure animated fadeIn">
			<label className="f2 fw6 ph0 mh0" htmlFor="category">What type of food?</label>
			<input
      	className="br3 b--light-silver pa2 mv5 input-reset ba bg-white w-100"
      	type="text"
        name="category"
        id="category"
        placeholder="food"
        value={category}
        onChange={onHandleInputChange}
      />
      <p onClick={() => onPageChange('deliverytakeout')} className="f6 fl link dim black db pointer">Back</p>
      <p onClick={() => onPageChange('results')} className="f6 fr link dim black db pointer">Submit</p>
		</div>
	);
}

export default Category;