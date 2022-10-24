import { useState } from "react";
import pokeArticunoSvg from "../../../assets/pokeArticuno-bg.svg";
import NotFoundCard from "../../../components/ui/notFound/NotFoundCard";
import PokemonForm from "../components/form/PokemonForm";
import PokeSingle from "../components/single/PokeSingle";
import styles from "./style.module.css";
function FindPokemon(props) {
	const [pokemon, setPokemon] = useState([]);
	const [isEndPointNotFound, setIsEndPointNotFound] = useState(false);
	const [isEndpointSuccessfully, setIsEndpointSuccessfully] = useState(false);
	const collectPokemonSpecies = (response) => {
		setIsEndpointSuccessfully(true);
		setIsEndPointNotFound(false);
		setPokemon(response);
	};
	const collectError = (response) => {
		setIsEndPointNotFound(true);
		setIsEndpointSuccessfully(false);
	};
	return (
		<div className={styles.findPokemon}>
			<img
				src={pokeArticunoSvg}
				alt="Many pokemon's to compose background"
				className={styles.findPokemon__bg}
			/>
			<div className="container">
				<div className={styles.__row}>
					<div className={styles.__firstColumn}>
						{isEndPointNotFound && 
							<NotFoundCard title="Not found any pokemon with this name"/>}
						{isEndpointSuccessfully && <PokeSingle pokemon={pokemon} />}
					</div>
					<div className="__col">
						<PokemonForm
							collectResults={collectPokemonSpecies}
							collectError={collectError}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default FindPokemon;
