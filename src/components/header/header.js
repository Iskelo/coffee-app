import React from "react";
import logo from '../../images/coffee-logo-white.png';
import './header.scss';
import { Link } from "react-router-dom";
// import Nav from "../nav";

const Header = () => {
	return (
		<header className="header">
			{/* <Nav /> */}
			<nav>
				<ul className="header__list">
					<li>
						<Link to='/' className="header__list"><img src={logo} alt="logo" />Coffee house</Link>
					</li>
					<li>
						<Link to='/coffee'>Our coffee</Link>
					</li>
					<li>
						<Link to='/pleasure'>For your pleasure</Link>
					</li>
				</ul>
			</nav>
		</header >
	)
}
export default Header;