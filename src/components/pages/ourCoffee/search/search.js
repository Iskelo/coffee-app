import { Component } from "react";
import "../filter/filter.scss"


export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	onUpdateSearch = (e) => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onUpdateSearch(term);
	}

	render() {
		return (
			<div className="search">
				<div className="search__label">
					<p>Looking for </p>
				</div>
				<form className="search__form">
					<input type="text"
						placeholder="start typing here..."
						value={this.state.term}
						onChange={this.onUpdateSearch}
					/>
				</form>
			</div>
		)
	}
}