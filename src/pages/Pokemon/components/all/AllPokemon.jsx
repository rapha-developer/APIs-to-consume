import { useEffect, useState } from "react";
import PokemonCollection from "../collection/PokemonCollection";
import PokemonItem from "../item/pokemonItem";
import styles from "./style.module.css";
function AllPokemon(props) {
	const pokemonSpecies = {
		data: props?.pokemon?.pokemon_species || [{message: 'Not found pokemon_species'}],
		size: props?.pokemon?.pokemon_species?.length || 0,
		pokemon_per_page: 20
	}
	const captureAllNames = pokemonSpecies.data.map((pokemon) => {
		return pokemon.name
	});
	
	const pagination = createPagination();
	function createPagination() {
		const pagination = {}
		const numberOfPages = parseInt(pokemonSpecies.size / pokemonSpecies.pokemon_per_page)
		const pageInitial = 0
		const pageNext = 1
		const prefixPage = 'page-'
		for(let pageItem = pageInitial; pageItem <= numberOfPages; pageItem++) {
			const pokemonToBuildPage = []
			for (let pokemonItem = (pageItem * pokemonSpecies.pokemon_per_page);
					pokemonItem < ((pageItem + pageNext) * pokemonSpecies.pokemon_per_page);
					pokemonItem++
				) {
					if (captureAllNames[pokemonItem]) {
						pokemonToBuildPage.push(captureAllNames[pokemonItem])
					}
				}
				const id = (pageItem + pageNext)
				const pageName = (prefixPage) + id
				pagination[pageName] = {
					id: id,
					data: pokemonToBuildPage
				}
		}
		return pagination
	}
	useEffect(() => {
		createPokemonFromPagination(pagination, 1)
	}, [pokemonSpecies])
	const [pokemon, setPokemon] = useState([])
	function createPokemonFromPagination(pagination, id) {
		const prefixPage = 'page-'
		const allPokemonToBuildPage = pagination[prefixPage+(id)].data
		const pokemonPromises = []
		allPokemonToBuildPage.map(async (pokemonName) => {
			const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
			pokemonPromises.push(fetch(url).then(res => res.json()).catch(error => alert(error)));
		});
		Promise.all(pokemonPromises)
			.then(allPokemon => {
				setPokemon(allPokemon)
			})
			.catch(error => alert('pokemonPromises not working' + error))
	}
	const allPokemonHero = {
		title: `${pokemonSpecies.size} Pokémon found in this generation`,
		description: `Uma lista de ${pokemonSpecies.size} Pokémon que foram introduzidos nesta geração`
	}
	return (
		<div className={styles.allPokemon}>
			<div className="container">
				<div className={styles.allPokemon__header}>
					<h2 className={styles.allPokemon__title}>
						{allPokemonHero.title}
					</h2>
					<p className={styles.allPokemon__description}>
						{allPokemonHero.description}
					</p>
				</div>
				<PokemonCollection collection={pokemon} />
			</div>
		</div>
	);
}
export default AllPokemon;
