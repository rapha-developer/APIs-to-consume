import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import AdvicePage from "./pages/Advice/AdvicePage";
import Footer from "./components/footer/Footer";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import RickPage from "./pages/RickyMorty/RickPage";
import {
	createItemsToBuildNavbar,
	createItemsToBuildFooter,
	createPagesPosition,
	createItemsToBuildMapOfOptions
} from "./data/constants";
import PokemonPage from "./pages/Pokemon/PokemonPage";
import PokeExplorePage from "./pages/Pokemon/pages/explore/PokeExplorePage";
function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route
					path={createItemsToBuildNavbar[createPagesPosition.first].url}
					element={<HomePage />}
				/>
				<Route
					path={createItemsToBuildNavbar[createPagesPosition.second].url}
					element={<AdvicePage />}
				/>
				<Route
					path={createItemsToBuildNavbar[createPagesPosition.third].url}
					element={<RickPage />}
				/>
				<Route
					path={createItemsToBuildNavbar[createPagesPosition.fourth].url}
					element={<PokemonPage />}
				/>
				<Route
					path={createItemsToBuildFooter[createPagesPosition.first]
							.items[createPagesPosition.first].url}
					element={<PokeExplorePage 
					type={createItemsToBuildMapOfOptions[createPagesPosition.first].type} />}
				/>		
				<Route
					path={createItemsToBuildFooter[createPagesPosition.first]
							.items[createPagesPosition.second].url}
					element={<PokeExplorePage 
					type={createItemsToBuildMapOfOptions[createPagesPosition.second].type} />}
				/>
				<Route
					path={createItemsToBuildFooter[createPagesPosition.first]
							.items[createPagesPosition.third].url}
					element={<PokeExplorePage 
					type={createItemsToBuildMapOfOptions[createPagesPosition.third].type} />}
				/>
				<Route
					path={createItemsToBuildFooter[createPagesPosition.first]
							.items[createPagesPosition.fourth].url}
					element={<PokeExplorePage />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
