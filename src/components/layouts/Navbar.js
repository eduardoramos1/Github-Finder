import React, { Component } from 'react'
// Proptypes serve para verificar o tipo de um atributo
import PropTypes from "prop-types";

export class Navbar extends Component {
	// define um valor padrao para props, caso não seja passado um valor
	static defaultProps = {
		title: "Github Finder",
		icon: "fa fa-github"
	}

	// para definir o tipo de dado que a prop espera receber e definir se é requerido ou nao
	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	}

  	render() {
		return (
			<nav className="navbar bg-primary">
				<h1> 
					<i className = { this.props.icon } />
					{ this.props.title }
				</h1>
			</nav>
		)
  	}
} 

export default Navbar