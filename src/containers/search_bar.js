import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {

	constructor(props) {
		super(props)

		this.state = { term: '' };
		// this.onInputChange = this.onInputChange.bind(this); // Binding (overriding) context to function
	}

	onInputChange(event) {
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();

		// Fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });

	}

	render() {
		return (
			<form 
				onSubmit={this.onFormSubmit.bind(this)}
				className="input-group">
				<input 
					placeholder="Get a five-day forecast"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange.bind(this)} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-primary">Submit</button>
				</span>
			</form>
		);
	}
}

export default connect(null, {fetchWeather})(SearchBar);