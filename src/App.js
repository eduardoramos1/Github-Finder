import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar.js";
import Users from "./components/users/Users";
import "./App.css";

class App extends Component {
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
					<Users />
				</div>
			</div>
		);
	}
}

export default App;
