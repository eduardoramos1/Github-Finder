import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar.js";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
	state = {
		users: [],
		loading: false
	};

	// Método de ciclo de vida. Executa quando a aplicação é criada
	async componentDidMount() {
		// O setState é usado para alterar as informações armazenadas dentro de "state"
		this.setState({ loading: true });

		const res = await axios.get(
			`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ users: res.data, loading: false });
	}

	render() {
		return (
			// O html gerado tem que estar envolvivido por um elemento Pai
			// React.Fragment é similar ao "template" de Vue, ou seja cria um elemento pai, porém esse elemento nao aparece na página final do projeto
			//  É possivel importar o "Fragment" do react e usar somente "Fragment" na tag ao invés de "React.Fragment"
			// <React.Fragment>
			// 	<h2 className="mb-2">Meu App</h2>
			// </React.Fragment>
			<div className="App">
				<Navbar title="Github Finder" icon="fa fa-github" />
				<div className="container">
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
