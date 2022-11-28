import "./cardProd.scss";
import aromistico from "../../../../images/group/aromatico.png";

export default function CardProd(props) {
	return (
		<div className='cards__item' key={props.id}>
			<div className="item__img">
				<img src={aromistico} alt="aromistico" />
			</div>
			<div className="item__text">
				<p className="title"><span>Aromistico</span> Coffee 1 kg</p>
				<p className="country">{props.country}</p>
				<p className="price">6.99$</p>
			</div>
		</div>
	)
}
