import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

//  Ter em mente que tudo isso é basicamente um boilerplate


const GithubState = props => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false
	};

	const [state] = useReducer(GithubReducer, initialState);
	
	// Para pesquisar usuarios no github

	// pegar usuario

	//pegar Repos

	// limpar usuarios

	// set loading

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
