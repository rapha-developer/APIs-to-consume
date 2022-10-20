
import { useState } from 'react'
import AllPokemon from './components/all/AllPokemon'
import HeroPokemon from './Hero/HeroPokemon'
import PokeMart from './Mart/PokeMart'
import { createPokeBallsToPokeMart } from '../../data/constants'
import styles from './style.module.css'
import PokeMartHero from './Mart/components/hero/PokeMartHero'
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
            <PokeMartHero
                title='Welcome to PokeMart-PokeBalls'
                product='PokeBalls'
                items={createPokeBallsToPokeMart} />
        </div>
    )
}
export default PokemonPage