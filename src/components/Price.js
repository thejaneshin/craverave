import React from 'react';
import './animate.css';

const Price = ({ onPageChange, onHandleInputChange, price }) => {
	return (
		<div className="measure animated fadeIn">
			<label className="f2 fw6 ph0 mh0">Price</label>
			<div className="mt5">
				<label>
					<input 
						type="radio"
						name="price"
						value='1'
						checked={price === '1'}
						onChange={onHandleInputChange} />$ 
				</label>
				<label>
					<input 
						type="radio"
						name="price"
						value="2"
						checked={price === '2'}
						onChange={onHandleInputChange} />$$
				</label>
				<label>
					<input 
						type="radio"
						name="price"
						value="3"
						checked={price === '3'}
						onChange={onHandleInputChange} />$$$
				</label>
				<label>
					<input 
						type="radio"
						name="price"
						value="4"
						checked={price === '4'}
						onChange={onHandleInputChange} />$$$$
				</label>
			</div>
    	<p onClick={() => onPageChange('location')} className="f6 mt5 fl link dim black db pointer">Back</p>
      <p onClick={() => onPageChange('deliverytakeout')} className="f6 mt5 fr link dim black db pointer">Next</p>
		</div>
	);
}

export default Price;