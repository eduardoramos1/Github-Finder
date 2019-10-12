import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
	// Quando se tem um input com value preso a um valor de state, é necessário fazer uma chamada de evento onChange para poder digitar no input
	state = {
		text: ""
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired,
		setAlert: PropTypes.func.isRequired
	};

	// [ev.target.name] pega o atributo name do input que está disparando o evento, no caso abaixo temos um input tipo text como name="text", ao usar esse macete, todo novo input que criar eu posso usar o mesmo metodo para setar o valor no state. para usar uma variável dentro de um objeto, é necessario envolver esta variavel entre colchetes ([])
	onChange = ev => this.setState({ [ev.target.name]: ev.target.value });

	onSubmit = ev => {
		const { text } = this.state;
		const { searchUsers, setAlert } = this.props;
		ev.preventDefault();
		if (!text) {
			setAlert("Por favor digite algo", "light");
		} else {
			searchUsers(text);
			this.setState({ text: "" });
		}
	};

	render() {
		const { showClear, clearUsers } = this.props;

		return (
			<div>
				<form onSubmit={this.onSubmit} className="form">
					<input
						type="text"
						name="text"
						placeholder="Pesquisar Usuário..."
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input
						type="submit"
						value="Pesquisar"
						className="btn btn-dark btn-block"
					/>
				</form>
				{showClear && (
					<button className="btn btn-light btn-block" onClick={clearUsers}>
						Limpar
					</button>
				)}
			</div>
		);
	}
}

export default Search;
