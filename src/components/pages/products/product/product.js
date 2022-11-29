import Footer from '../../../footer/footer';
import Header from '../../../header/header';
import HeroPage from '../../../hero/heroPage';
import AboutProd from '../../../aboutProd/aboutProd';

export default function Product(props) {
	return (
		<>
			<Header />
			<HeroPage title='Our Coffee' />
			<AboutProd title='About It' />
			<Footer />
		</>



	)
}