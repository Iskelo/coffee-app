import Footer from '../../../footer/footer';
import HeroPage from '../../../hero/heroPage';
import AboutPage from '../../../about/aboutPage';
import Cards from '../../ourCoffee/cards/cards';
import { goods } from '../../../../goods';
import { Link } from "react-router-dom";

export default function PleasureApp(props) {




	return (
		<>
			<HeroPage title="For your pleasure" data="pleasure" />
			<AboutPage title="About our goods" />
			<Link to='/coffee'>
				<Cards data={goods} />
			</Link>

			<Footer />
		</>
	)
}