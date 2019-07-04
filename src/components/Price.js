import React from 'react';
import './animate.css';
import './Price.css';

const Price = ({ onPageChange, onPriceChange, price1, price2, price3, price4 }) => {
	return (
		<div className="measure animated fadeIn">
			<label className="f2 fw6 ph0 mh0">Price</label>
			<div className="mt5">
				<div className='ck-button'>
					<label>
						<input 
							type="checkbox"
							name="price1"
							value="1"
							checked={price1}
							onChange={onPriceChange} /><span>$</span> 
					</label>
				</div>
				<div className='ck-button'>
					<label>
						<input 
							type="checkbox"
							name="price2"
							value="2"
							checked={price2}
							onChange={onPriceChange} /><span>$$</span>
					</label>
				</div>
				<div className='ck-button'>
					<label>
						<input 
							type="checkbox"
							name="price3"
							value="3"
							checked={price3}
							onChange={onPriceChange} /><span>$$$</span>
					</label>
				</div>
				<div className='ck-button'>
					<label>
						<input 
							type="checkbox"
							name="price4"
							value="4"
							checked={price4}
							onChange={onPriceChange} /><span>$$$$</span>
					</label>
				</div>
			</div>
    	<p onClick={() => onPageChange('location')} className="f6 mt5 fl link dim black db pointer">Back</p>
      <p onClick={() => onPageChange('type')} className="f6 mt5 fr link dim black db pointer">Next</p>
		</div>
	);
}

export default Price;