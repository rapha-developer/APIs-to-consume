
import { useEffect, useState } from 'react'
import Pagination from '../../../../components/ui/pagination/Pagination'
import PokemonCollection from '../collection/PokemonCollection'
import styles from './style.module.css'
function AllPokemon(props) {
    const pokemonSpecies = {
		data: props?.pokemon?.pokemon_species || [{message: 'Not found pokemon_species'}],
		size: props?.pokemon?.pokemon_species?.length || 0,
		pokemon_per_page: 20,
		numberOfPages: generateNumberOfPages(props?.pokemon?.pokemon_species?.length || 20)
	}
	function generateNumberOfPages(elements, per_page = 20) {
		const pageSize = (elements / per_page);
		if(Number.isInteger(pageSize)) {
			return pageSize
		} 
		const moreOne = 1
		return parseInt(pageSize) + moreOne 
	}

	const captureAllIds = pokemonSpecies.data.map((pokemon) =>{
		const fullUrl = pokemon.url 
		const regexToCaptureID = /\/v2\/pokemon-species\/([0-9]+)\/$/i
		const responseFromMatch = fullUrl.match(regexToCaptureID)
		const positionWithID = 1
		return responseFromMatch[positionWithID]
	});

	const pagination = createPagination()
    function createPagination() {
		const pagination = {}
		const numberOfPages = pokemonSpecies.numberOfPages
		const pageInitial = 0
		const pageNext = 1
		const prefixPage = 'page-'
		for(let pageItem = pageInitial; pageItem < numberOfPages; pageItem++) {
			const pokemonToBuildPage = []
			for (let pokemonItem = (pageItem * pokemonSpecies.pokemon_per_page);
					pokemonItem < ((pageItem + pageNext) * pokemonSpecies.pokemon_per_page);
					pokemonItem++
				) {
					if (captureAllIds[pokemonItem]) {
						pokemonToBuildPage.push(captureAllIds[pokemonItem])
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
    const [pageID, setPageID] = useState(1)
    useEffect(() => {
        createPokemonFromPagination(pagination, 1)
    }, [pokemonSpecies.size]);
    useEffect(() => {
        createPokemonFromPagination(pagination, pageID)
    }, [pageID]);

	const [pokemon, setPokemon] = useState([])
    function createPokemonFromPagination(pagination, id) {
		const prefixPage = 'page-'
		const allPokemonToBuildPage = pagination[prefixPage+(id)].data
		const pokemonPromises = []
		allPokemonToBuildPage.map((pokemonID) => {
			const url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`;
			pokemonPromises.push(fetch(url).then(res => res.json()));
		});
		Promise.all(pokemonPromises)
			.then(allPokemon => {
				setPokemon(allPokemon)
			})
			.catch(error => alert('pokemonPromises not working' + error))
	}
    const collectPaginationItem = (pageId) => {
		setPageID(pageId)
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
                <Pagination 
                    numberOfPages={pokemonSpecies.numberOfPages} 
					collectPaginationItem={collectPaginationItem} />
                <PokemonCollection collection={pokemon} />
			</div>
		</div>
    )
}
export default AllPokemon