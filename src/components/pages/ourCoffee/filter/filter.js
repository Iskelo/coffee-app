import "./filter.scss";

export default function Filter(props) {

	const buttonData = [
		{ name: 'all', country: 'All' },
		{ name: 'brasil', country: 'Brasil' },
		{ name: 'kenya', country: 'Kenya' },
		{ name: 'columbia', country: 'Columbia' }
	]

	const btns = buttonData.map(item => {
		const { country, name } = item;
		const active = props.filter === name;
		const clazz = active ? 'btn-active' : '';

		return (
			<button
				className={`${clazz}`}
				key={name}
				onClick={() => props.onFilterSelect(name)}
				type="button">
				{country}
			</button>
		)

	})

	return (
		<div className="buttons" >
			<div className="filter__label">
				<p>Or filter</p>
			</div>
			<div className="btns">
				{btns}
			</div>
		</div>
	)
}