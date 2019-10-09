import React, { Component } from "react";
import "./App.css";

class App extends Component {
	render() {
		const name = "Eduardo Ramos";
		const loading = false;
		const showName = true;

		return (
			// O html gerado tem que estar envolvivido por um elemento Pai
			// React.Fragment é similar ao "template" de Vue, ou seja cria um elemento pai, porém esse elemento nao aparece na página final do projeto
			//  É possivel importar o "Fragment" do react e usar somente "Fragment" na tag ao invés de "React.Fragment"
			<React.Fragment>
				<h2 className="mb-2">Meu App</h2>
				{loading ? (
					<h4>carregando...</h4>
				) : (
					<h1>Olá React, menu nome é {showName && name.toUpperCase()}</h1>
				)}
			</React.Fragment>
		);
	}
}

export default App;
