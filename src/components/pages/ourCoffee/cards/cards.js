import CardProd from "../cardProd/cardProd";
import "../cardProd/cardProd.scss";

export default function Cards(props) {

	const cards = props.data.map(item => {
		const { id, ...itemProps } = item;
		return (
			<CardProd key={id}
				{...itemProps}
			/>
		)
	})
	return (
		<section className="cards">
			<div className="cards__container">
				{cards}
			</div>
		</section>
	)
}

