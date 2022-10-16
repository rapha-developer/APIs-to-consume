import { useState } from 'react'
import pocketMonsterBgPng from '../../../assets/PocketMonstersBg.png'
import Submit from '../../../components/ui/submit/Submit'
import AllPokemon from '../components/all/AllPokemon'
import GenerationForm from '../components/generation/GenerationForm'
import styles from './style.module.css'
function HeroPokemon() {
    const PokeAPI = {
        title: 'PokeAPI',
        description: "All the Pokémon data you'll ever need in one place, easily accessible through a modern RESTful API."
    }
    const [collectPokemon, setCollectPokemon] = useState([])
    const collectResponseFromGenerationUrl = (response) => {
        setCollectPokemon(response)
    }
    const keyWordToShowAllPokemon = 'name'
    const keysFromCollectPokemon = Object.keys(collectPokemon)
    const showAllPokemon = (keysFromCollectPokemon.includes(keyWordToShowAllPokemon)) ? true : false

    return (
        <section className={styles.heroPokemon}>
            <div className="container">
                <div className={styles.__row}>
                    <div className={`__col ${styles.__columnMain}`}>
                        <div className={styles.heroPokemon__info}>
                            <h1 className={styles.heroPokemon__title}>{PokeAPI.title}</h1>
                            <p className={styles.heroPokemon__description}>{PokeAPI.description}</p>
                            <GenerationForm 
                                collectPokemon={collectResponseFromGenerationUrl}
                            />
                        </div>
                    </div>
                    <div className="__col">
                        <img src={pocketMonsterBgPng}
                            className=''
                            alt="" />
                    </div>
                </div>
            </div>
            {showAllPokemon && <AllPokemon pokemon={collectPokemon} /> }
        </section>
    )
}
export default HeroPokemon