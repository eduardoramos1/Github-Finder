import React, { Component } from "react";

export class User extends Component {
	componentDidMount() {
		// Pegando Usuario da API, usando a função getUser definido em App.js
		// .match.params pega um valor definir como parametro dentro uma url
		this.props.getUser(this.props.match.params.login);
	}

	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			website,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable
		} = this.props.user;

		const { loading } = this.props;
		return (
			<div>
				<div>{name}</div>
				<div>{name}</div>
				<div>{name}</div>
				<div>{name}</div>
				<div>{name}</div>
			</div>
		);
	}
}

export default User;
