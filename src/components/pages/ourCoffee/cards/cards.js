import CardProd from "../cardProd/cardProd";
import "../cardProd/cardProd.scss";

export default function Cards({ data, onOpenDescription }) {

	const cards = data.map(item => {
		const { id, ...itemProps } = item;
		if (onOpenDescription) {
			return (
				<CardProd key={id}
					{...itemProps}
					onOpenDescription={() => onOpenDescription(id)}
				/>
			)
		}
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

