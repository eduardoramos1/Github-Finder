// useState é um hook que permite usar state em componentes funcionais
import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
	// Quando se tem um input com value preso a um valor de state, é necessário fazer uma chamada de evento onChange para poder digitar no input

	//Criando state usando o useState, o primeiro valor é atributo que quer criar e o segundo um metodo para alterar o valor do atributo, as aspas invocadas como parametro no metodo useState representam o valor padrao de text
	const [text, setText] = useState("");

	const onChange = ev => setText(ev.target.value);

	const onSubmit = ev => {
		ev.preventDefault();
		if (!text) {
			setAlert("Por favor digite algo", "light");
		} else {
			searchUsers(text);
			setText("");
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input
					type="text"
					name="text"
					placeholder="Pesquisar Usuário..."
					value={text}
					onChange={onChange}
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
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
};

export default Search;
