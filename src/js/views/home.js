import React from "react";
import "../../styles/home.css";
import CharactersList from "../component/CharactersList";
import PlanetList from "../component/PlanetList";
import StarshipsList from "../component/StarshipsList";

export const Home = () => (
	<div className="container">
		<CharactersList />
		&nbsp;
		<PlanetList />
		&nbsp;
		<StarshipsList />
	</div>
);
