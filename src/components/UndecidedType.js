import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import './UndecidedType.css';
import './animate.css';

class UndecidedType extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryOptions: [],
			notWantedOptions: [],
			randomPick: ""
		};
	}

	componentDidMount() {
		axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/categories', {
			headers: {
        Authorization: 'Bearer ' + process.env.REACT_APP_API_KEY
      }
		})
		.then(response => {
			const categoryOptions = [];
			const allCategories = [];
			
			response.data.categories.forEach(category => {
				if (category.parent_aliases.includes("food") || category.parent_aliases.includes("restaurants")) {
					categoryOptions.push({ "value": category.title, "label": category.title });
					allCategories.push(category.title);
				}
			})
			this.setState({categoryOptions});

			this.props.onCategoriesRetrieve(allCategories);
		})
		.catch(err => {
			console.log(err);
		});
	}

	handleMultiChange = (notWantedOptions) => {
		this.setState({notWantedOptions});
		
		let notWanted = [];
		notWantedOptions.forEach(option => {
			notWanted.push(option.value);
		})

		this.props.onWantedChange(notWanted);
	}

	render() {
		const { onPageChange } = this.props;
		return (
			<article className="br3 ba b--black-10 mv5 mw6 shadow-5 mid">
      	<main className="pa4 black-80 mt5">
					<div className="animated fadeIn">
						<label className="f2 fw6 ph0 mh0">Filter out</label>

						<Select
							isMulti
							name="notWantedOptions"
							options={this.state.categoryOptions}
							className="basic-multi-select pa2 mv5 mb3"
							placeholder="Select..."
							value={this.state.notWantedOptions}
							onChange={this.handleMultiChange}
						/>

						<button
			        onClick={() => onPageChange('random')}>
			        Pick for me!
			      </button>

						<p onClick={() => onPageChange('type')} className="f6 fl link dim black db pointer">Back</p>

					</div>
				</main>
			</article>
		);
	}
}

export default UndecidedType;
