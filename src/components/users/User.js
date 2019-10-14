// useEffect permite o uso de métodos de ciclo de vida dentro de componentes funcionais

import React, { useEffect, Fragment } from "react";
import Spinner from "../layouts/Spinner";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user, loading, repos, getUserRepos, getUser, match }) => {
	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		// eslint-disable-next-line
	}, []);
	// o array passado como parametro para o useEffect, serve para definir regras de quando executar o metodo. Quando passado um array vazio o useEffect vai imitar o comportamento de "componentDidMount()"

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
	} = user;

	if (loading) return Spinner;
	return (
		<Fragment>
			<Link to="/" className="btn btn-light sm-full-width my-1">
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
			<Repos repos={repos} />
		</Fragment>
	);
};

User.propTypes = {
	loading: PropTypes.bool,
	user: PropTypes.object.isRequired,
	getUser: PropTypes.func.isRequired,
	getUserRepos: PropTypes.func.isRequired,
	repos: PropTypes.array.isRequired
};

export default User;
