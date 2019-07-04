import React from 'react';
import './animate.css';

const Results = ({ getRestaurants }) => {
  getRestaurants()
	return (
		<div className="measure animated fadeIn">
			<p className="f2 fw6 ph0 mh0">Results</p>
		</div>
	);
}

export default Results;