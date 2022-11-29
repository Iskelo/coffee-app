import './heroPage.scss';
import heroBg from "../../images/coffee-shop-bg.png";
import heroBg2 from "../../images/pleasure-bg.png";

export default function HeroPage({ title, data }) {
	let bg = ""

	if (data === "pleasure") {
		bg = heroBg2;
	} else {
		bg = heroBg;
	}

	return (
		<section className="heroPage">
			<div className="img">
				<img src={bg} alt="hero" />
			</div>
			<div className="hero__title">
				<h1>{title}</h1>
			</div>
		</section>
	)

}