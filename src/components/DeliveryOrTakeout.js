import React from 'react';
import './animate.css';

const DeliveryOrTakeout = ({ onPageChange, onHandleInputChange, delivery, takeout }) => {
	return (
		<div className="measure animated fadeIn">
			<label className="f2 fw6 ph0 mh0">Delivery / Takeout?</label>
			<div className="mt5">
				<label>
					<input 
						type="checkbox"
						name="delivery"
						checked={delivery}
						onChange={onHandleInputChange} />Delivery
				</label>
				<br/>
				<label>
					<input 
						type="checkbox"
						name="takeout"
						checked={takeout}
						onChange={onHandleInputChange} />Takeout
				</label>
				<br/>
			</div>
    	<p onClick={() => onPageChange('price')} className="f6 mt5 fl link dim black db pointer">Back</p>
      <p onClick={() => onPageChange('category')} className="f6 mt5 fr link dim black db pointer">Next</p>
		</div>
	);
}

export default DeliveryOrTakeout;