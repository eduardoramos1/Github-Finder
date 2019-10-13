import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Destructuring para retirar valores de um objeto que espera receber
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
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
				<div>
					<Link to={`/user/${login}`}> Veja mais </Link>
				</div>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
