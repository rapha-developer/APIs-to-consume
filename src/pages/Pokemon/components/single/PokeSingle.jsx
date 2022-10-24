
import PokeTimeline from '../timeline/PokeTimeline';
import PokeBodyHero from './components/body/PokeBodyHero';
import PokeHeadHero from './components/head/PokeHeadHero';
import styles from './style.module.css'
function PokeSingle(props) {
	const pokeSingle = {
		name: props.pokemon.name,
		description: collectFlavorText(props.pokemon),
		url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`,
		color: props?.pokemon?.color?.name || "Not found color in props",
		attributes: collectAttributes(props.pokemon) || [],
		varieties: props.pokemon.varieties || [],
	};
	function collectFlavorText(pokemon) {
		const firstFlavorText = 0;
		filterDescription(pokemon.flavor_text_entries)
		return pokemon?.flavor_text_entries[firstFlavorText]?.flavor_text
			? chooseFirstDescriptionInEnglish(pokemon.flavor_text_entries)
			: "Not found flavor text";
	}
	function chooseFirstDescriptionInEnglish(allDescriptions) {
		const descriptionsInEnglish = filterDescription(allDescriptions)
		const firstText = 0;
		return  removeJumpLine(descriptionsInEnglish[firstText].flavor_text)
	}
	function filterDescription(allDescriptions) {
		const english = 'en'
		const descriptionsInEnglish = allDescriptions.filter((descriptionItem) => (descriptionItem.language.name === english));
		return descriptionsInEnglish
	}
	function removeJumpLine(text) {
		const textAfterFirstFilter = text.replace("\n", ' ')
		const textAfterSecondFilter =textAfterFirstFilter.replace("\f", ' ')
		return textAfterSecondFilter
	}
	function collectAttributes(pokemon) {
		const attributeNames = generateAttributeNames(pokemon)
		const attributesFromPokemon = attributeNames.map((attributeName) => {
			return {
				label: attributeName,
				content: pokemon[attributeName].name,
			};
		});

		attributesFromPokemon.push(generateLocationAreas(pokemon));
		return attributesFromPokemon;
	}
	function generateAttributeNames(pokemon) {
		const attributeNamesDefault = [
			"generation",
			"growth_rate",
			"habitat",
			"shape",
		];
		const attributesValid = attributeNamesDefault.filter((attributeName) => pokemon[attributeName] !== null)
		return attributesValid
	}
	function generateLocationAreas(pokemon) {
		const attributeName = "location area";
		const firstArea = 0;
		return {
			label: attributeName,
			content: pokemon.pal_park_encounters[firstArea].area.name,
		};
	}

	return (
		<div className={styles.pokeSingle}>
			<div className={styles.pokeSingle__head}>
				<PokeHeadHero 
					name={pokeSingle.name}
					description={pokeSingle.description}
				/>
			</div>
			<div className={styles.pokeSingle__body}>
				<PokeBodyHero />
				<PokeTimeline 
					name={pokeSingle.name}
					url={pokeSingle.url}
					attributes={pokeSingle.attributes}
				/>
			</div>
		</div>
	);
}
export default PokeSingle;
