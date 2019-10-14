import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
	return (
		<div className="card my-1">
			<h3>
				<a href={repo.html_url} target="tab">
					{" "}
					{repo.name}
				</a>
			</h3>
		</div>
	);
};

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired
};

export default RepoItem;
