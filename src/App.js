import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar.js";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import axios from "axios";
import "./App.css";

class App extends Component {
	state = {
		users: [],
		user: {},
		loading: false,
		alert: null,
		repos: []
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

	// Para pesquisar usuarios no github
	searchUsers = async text => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ users: res.data.items, loading: false });
	};

	// Pesquisa um único usuário do Github
	getUser = async username => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ loading: false, user: res.data });
	};

	// Pega os repositorios do usuario
	getUserRepos = async username => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ loading: false, repos: res.data });
	};

	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });

		setTimeout(() => this.setState({ alert: null }), 3000);
	};

	render() {
		const { users, loading, user, repos } = this.state;
		return (
			// O html gerado tem que estar envolvivido por um elemento Pai
			// React.Fragment é similar ao "template" de Vue, ou seja cria um elemento pai, porém esse elemento nao aparece na página final do projeto
			//  É possivel importar o "Fragment" do react e usar somente "Fragment" na tag ao invés de "React.Fragment"
			// <React.Fragment>
			// 	<h2 className="mb-2">Meu App</h2>
			// </React.Fragment>
			<Router>
				<div className="App">
					<Navbar title="Github Finder" icon="fa fa-github" />
					<div className="container">
						<Switch>
							<Route
								exact
								path="/"
								render={props => (
									<Fragment>
										<Alert alert={this.state.alert} />
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClear={users.length > 0 ? true : false}
											setAlert={this.setAlert}
										/>
										<Users loading={loading} users={users} />
									</Fragment>
								)}
							/>
							<Route exact path="/sobre" component={About} />
							<Route
								exact
								path="/user/:login"
								render={props => (
									<User
										//  {...props} é passado para ter acesso a outras props, como match, history e location
										{...props}
										getUser={this.getUser}
										getUserRepos={this.getUserRepos}
										repos={repos}
										user={user}
										loading={loading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
