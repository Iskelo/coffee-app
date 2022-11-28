import HeroPage from '../../../hero/heroPage';
import AboutPage from '../../../about/aboutPage';
import Search from '../search/search';
import Filter from '../filter/filter';
import Cards from '../cards/cards';
import Footer from '../../../footer/footer';
import { Component } from "react";
import { goods } from '../../../../goods';


export default class CoffeeApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: goods,
			term: '',
			filter: ''
		}
	}

	searchEmpt = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => {
			return item.country.indexOf(term) > -1
		})
	}

	onUpdateSearch = (term) => {
		this.setState({ term });
	};

	filterPost = (items, filter) => {
		switch (filter) {
			case 'columbia':
				return items.filter(item => item.country === "Columbia");
			case 'brasil':
				return items.filter(item => item.country === "Brasil");
			case 'kenya':
				return items.filter(item => item.country === "Kenya");
			default:
				return items;
		}
	}

	onFilterSelect = (filter) => {
		this.setState({ filter })
	}

	render() {
		const { data, term, filter } = this.state;
		const visibleData = this.filterPost((this.searchEmpt(data, term)), filter);
		return (
			<>
				<HeroPage title="Our Coffee" />
				<AboutPage
					title="About our beans"
					data="our"
				/>
				<section className="filter">
					<Search onUpdateSearch={this.onUpdateSearch} />
					<Filter filter={filter}
						onFilterSelect={this.onFilterSelect}
					/>
				</section>
				<Cards data={visibleData} onToggleProp={this.onToggleProp} />
				<Footer />
			</>
		)
	}
}
