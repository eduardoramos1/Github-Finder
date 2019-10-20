import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar.js";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import axios from "axios";

import GithubState from "./context/github/GithubState";

import "./App.css";

const App = () => {
	// Estado usando useState
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);
	const [repos, setRepos] = useState([]);

	let githubClientId;
	let githubClientSecret;

	if (process.env.NODE_ENV !== "production") {
		githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
		githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
	} else {
		githubClientId = process.env.GITHUB_CLIENT_ID;
		githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
	}
	// Para imitar "componentDidMount" em um componente funcional
	useEffect(() => {
		// definir uma função e a chamei logo em seguida para corrigir um aviso do useEffect, o useEffect só aceita que seja retornado uma função

		async function fetchUsers() {
			setLoading(true);

			const res = await axios.get(
				`https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`
			);
			setUsers(res.data);
			setLoading(false);
		}
		fetchUsers();
		// eslint-disable-next-line
	}, []);

	// Para pesquisar usuarios no github
	const searchUsers = async text => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);

		setUsers(res.data.items);
		setLoading(false);
	};

	// Pesquisa um único usuário do Github
	const getUser = async username => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);

		setUser(res.data);
		setLoading(false);
	};

	// Pega os repositorios do usuario
	const getUserRepos = async username => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);

		setRepos(res.data);
		setLoading(false);
	};

	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
	};

	const showAlert = (msg, type) => {
		setAlert({ msg, type });

		setTimeout(() => setAlert(null), 3000);
	};

	return (
		// O html gerado tem que estar envolvido por um elemento Pai
		// React.Fragment é similar ao "template" de Vue, ou seja cria um elemento pai, porém esse elemento nao aparece na página final do projeto
		//  É possivel importar o "Fragment" do react e usar somente "Fragment" na tag ao invés de "React.Fragment"
		// <React.Fragment>
		// 	<h2 className="mb-2">Meu App</h2>
		// </React.Fragment>
		<GithubState>
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
										<Alert alert={alert} />
										<Search
											searchUsers={searchUsers}
											clearUsers={clearUsers}
											showClear={users.length > 0 ? true : false}
											showAlert={showAlert}
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
										getUser={getUser}
										getUserRepos={getUserRepos}
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
		</GithubState>
	);
};

export default App;
