import "./cardProd.scss";
import aromistico from "../../../../images/group/aromatico.png";


export default function CardProd(props) {
	const { country, price, onOpenDescription, id } = props;

	return (
		<div className='cards__item' key={id} onClick={onOpenDescription}>
			<div className="item__img" >
				<img src={aromistico} alt="aromistico" />
			</div>
			<div className="item__text">
				<p className="title"><span>Aromistico</span> Coffee 1 kg</p>
				<p className="country">{country}</p>
				<p className="price">{price}$</p>
			</div>
		</div>

	)



}
