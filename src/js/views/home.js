import React from "react";
import "../../styles/home.css";
import CharactersList from "../component/CharactersList";
import PlanetList from "../component/PlanetList";
import StarshipsList from "../component/StarshipsList";

export const Home = () => (
	<div className="card-lists w-25 mt-5 ms-5">
		<CharactersList />
		&nbsp;
		<PlanetList />
		&nbsp;
		<StarshipsList />
	</div>
);
