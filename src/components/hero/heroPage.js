import './heroPage.scss';

export default function HeroPage({ title }) {
	return (
		<section className="heroPage">
			<div className="hero__title">
				<h1>{title}</h1>
			</div>
		</section>
	)

}