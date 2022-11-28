import Footer from '../../../footer/footer';
import HeroPage from '../../../hero/heroPage';
import AboutPage from '../../../about/aboutPage';
import Cards from '../../ourCoffee/cards/cards';
import { goods } from '../../../../goods';

export default function PleasureApp(props) {
	return (
		<>
			<HeroPage title="For your pleasure" />
			<AboutPage title="About our goods" />
			<Cards data={goods} />
			<Footer />
		</>
	)
}