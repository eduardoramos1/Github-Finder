import React, { Component } from "react";

class UserItem extends Component {
	// para criar um estado para o componente
	// state = {
	// 	id: 1,
	// 	login: "mojombo",
	// 	avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
	// 	html_url: "https://github.com/mojombo"
	// };

	render() {
		// Destructuring para retirar valores de um objeto
		const { login, avatar_url, html_url } = this.props.user;

		return (
			<div className="card text-center">
				<img
					src={avatar_url}
					alt="Imagem github"
					className="round-img"
					style={{ width: "60px" }}
				/>
				<h3> {login} </h3>
				<div>
					<a href={html_url} target="tab" className="btn btn-dark btn-sm my-1">
						Página no github
					</a>
				</div>
			</div>
		);
	}
}

export default UserItem;
