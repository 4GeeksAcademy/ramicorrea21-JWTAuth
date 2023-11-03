import React, { useContext } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {

	return (
		<div className="text-center mt-5">
			<h1>Hello! this is the JWT auth proyect</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
};
