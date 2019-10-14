import React, { Component, Fragment } from "react";
import Spinner from "../layouts/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class User extends Component {
	componentDidMount() {
		// Pegando Usuario da API, usando a função getUser definido em App.js
		// .match.params pega um valor definir como parametro dentro uma url
		this.props.getUser(this.props.match.params.login);
	}

	static propTypes = {
		loading: PropTypes.bool,
		user: PropTypes.object.isRequired,
		getUser: PropTypes.func.isRequired
	};

	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			company,
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

		if (loading) return Spinner;
		return (
			<Fragment>
				<Link to="/" className="btn btn-light">
					Voltar para a pesquisa
				</Link>
				Empregado :{" "}
				{!hireable ? (
					<i className="fa fa-check text-success" />
				) : (
					<i className="fa fa-times-circle text-danger" />
				)}
				<div className="card grid-2">
					<div className="all-center">
						<img
							src={avatar_url}
							className="round-img"
							style={{ width: "150px" }}
							alt={name}
						/>
						<h1>{name}</h1>
						{location && (
							<Fragment>
								<p>Local: {location}</p>
							</Fragment>
						)}
					</div>
					<div>
						{bio && (
							<Fragment>
								<h3>Sobre</h3>
								<p>{bio}</p>
							</Fragment>
						)}
						<a
							href={html_url}
							className="btn btn-primary my-1"
							alt={name}
							target="tab"
						>
							Verifique este perfil no Github
						</a>
						<ul>
							<li>
								{login && (
									<Fragment>
										<strong>Usuario: </strong> {login}
									</Fragment>
								)}
							</li>
							<li>
								{company && (
									<Fragment>
										<strong>Ocupação: </strong> {company}
									</Fragment>
								)}
							</li>
							<li>
								{blog && (
									<Fragment>
										<strong>Blog: </strong> {blog}
									</Fragment>
								)}
							</li>
							<li>
								{website && (
									<Fragment>
										<strong>Site: </strong> {website}
									</Fragment>
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className="card text-center">
					<div className="badge badge-dark">
						{" "}
						<strong>Seguidores:</strong> {followers}
					</div>
					<div className="badge badge-dark">
						{" "}
						<strong>Seguindo:</strong> {following}
					</div>
					<div className="badge badge-dark">
						{" "}
						<strong>Repositorios publicos:</strong> {public_repos}
					</div>
					<div className="badge badge-dark">
						{" "}
						<strong>Gists:</strong> {public_gists}
					</div>
				</div>
			</Fragment>
		);
	}
}

export default User;
