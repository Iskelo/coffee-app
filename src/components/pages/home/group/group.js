import './group.scss';
import solimo from "../../../../images/group/solimo.png";
import presto from "../../../../images/group/presto.png";
import aromistico from "../../../../images/group/aromatico.png";
import { Link } from "react-router-dom";

const Group = () => {
	return (
		<section className="group" id='group'>
			<div className="group__title">
				<h3>Our best</h3>
			</div>

			<div className="group__content">
				<Link to='/coffee'>
					<div className="group__item">
						<div className="group__img">
							<img src={solimo} alt="Solimo" />
						</div>
						<div className="group__text">
							<p>Solimo Coffee Beans 2 kg</p>
						</div>
						<div className="group__price">
							<p>10.73$</p>
						</div>
					</div>
				</Link>
				<Link to='/coffee'>
					<div className="group__item">
						<div className="group__img">
							<img src={presto} alt="Solimo" />
						</div>
						<div className="group__text">
							<p>Presto Coffee Beans 1 kg</p>
						</div>
						<div className="group__price">
							<p>15.99$</p>
						</div>
					</div>
				</Link>
				<Link to='/coffee'>
					<div className="group__item">
						<div className="group__img">
							<img src={aromistico} alt="Solimo" />
						</div>
						<div className="group__text">
							<p><span>Aromistico</span> Coffee 1 kg</p>
						</div>
						<div className="group__price">
							<p>6.99$</p>
						</div>
					</div>
				</Link>
			</div>
		</section >
	)
}

export default Group;