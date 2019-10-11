import React, { Fragment } from "react";
// É possivel importar imagens graças ao webpack fazendo o trabalho por debaixo dos panos
import spinner from "./spinner.gif";

const Spinner = () => {
	return (
		<Fragment>
			<img
				src={spinner}
				alt="Carregando..."
				style={{ width: "200px", margin: "auto", display: "block" }}
			/>
		</Fragment>
	);
};

export default Spinner;
