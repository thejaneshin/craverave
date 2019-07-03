import React from 'react';
import './animate.css';
import './Price.css';

const Price = ({ onPageChange, onPriceChange, prices }) => {
	return (
		<div className="measure animated fadeIn">
			<label className="f2 fw6 ph0 mh0">Price</label>
			<div className="mt5">
				<div className='ck-button'>
					<label>
						<input 
							type="checkbox"
							value="1"
							onChange={onPriceChange} /><span>$</span> 
					</label>
				</div>
				<div className='ck-button'>
					<label>
						<input 
							type="checkbox"
							value="2"
							onChange={onPriceChange} /><span>$$</span>
					</label>
				</div>
				<div className='ck-button'>
					<label>
						<input 
							type="checkbox"
							value="3"
							onChange={onPriceChange} /><span>$$$</span>
					</label>
				</div>
				<div className='ck-button'>
					<label>
						<input 
							type="checkbox"
							value="4"
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