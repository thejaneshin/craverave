import React from 'react';
import './animate.css';


class Random extends React.Component {
	componentDidMount() {
		this.props.onPickRandom();
	}


	render() {
		const { onPageChange } = this.props;
		return (
			<div className="animated fadeIn">
				<label className="f2 fw6 ph0 mh0">How about...</label>
				<div className="mv5 f3">
					{this.props.type}
				</div>

				<button
					onClick={this.props.onPickRandom}>
				  Nah
				</button>

				<p onClick={() => onPageChange('undecided')} className="f6 fl link dim black db pointer">Back</p>
				<p onClick={() => onPageChange('results')} className="f6 fr link dim black db pointer">Yes!</p>
			</div>

		);
	}

}

export default Random;