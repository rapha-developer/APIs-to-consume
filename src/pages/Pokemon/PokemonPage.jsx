
import { useState } from 'react'
import AllPokemon from './components/all/AllPokemon'
import HeroPokemon from './Hero/HeroPokemon'
import styles from './style.module.css'
function PokemonPage() {
    const [collectPokemon, setCollectPokemon] = useState([])
    const collectResponseFromGenerationUrl = (response) => {
        setCollectPokemon(response)
    }
    const keyWordToShowAllPokemon = 'name'
    const keysFromCollectPokemon = Object.keys(collectPokemon)
    const showAllPokemon = (keysFromCollectPokemon.includes(keyWordToShowAllPokemon)) ? true : false

    return (
        <div className="pokemonPage">
            <HeroPokemon collectResponse={collectResponseFromGenerationUrl} />
            {showAllPokemon && <AllPokemon pokemon={collectPokemon}/>}
        </div>
    )
}
export default PokemonPage