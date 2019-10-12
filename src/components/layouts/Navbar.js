import React from "react";
// Proptypes serve para verificar o tipo de um atributo
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Destructuring para retirar valores de um objeto que espera receber
const Navbar = ({ icon, title }) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<i className={icon} />
				{title}
			</h1>
			<ul>
				<li>
					<Link to="/"> Inicio </Link>
				</li>
				<li>
					<Link to="/sobre"> Sobre </Link>
				</li>
			</ul>
		</nav>
	);
};

// define um valor padrao para props, caso não seja passado um valor
Navbar.defaultProps = {
	title: "Github Finder",
	icon: "fa fa-github"
};

// para definir o tipo de dado que a prop espera receber e definir se é requerido ou nao
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;
