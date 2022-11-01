import { useState } from "react"
import Input from "../../../components/ui/input/Input"
import NotFoundRickCharacter from "../components/error/NotFoundRickCharacter"
import RickForm from "../components/form/RickForm"
import RickCharactersList from "../components/list/RickCharactersList"

import styles from './style.module.css'
function FindCharacter() {
    const findCharacterData = {
        title: 'Find characters by name',
        subtitle: 'Rick and Morty is an American adult animated science fiction and comedy series.'
    }
    const [charactersFromApi, setCharactersFromApi] = useState([])
    const collectCharacters = (response) => {
        setCharactersFromApi(response)
    }
    const keyWordToNotFoundCharacter  = 'error'
    const keywordToListCharacters = 'results'
    const keysFromResponseApi = Object.keys(charactersFromApi)

    const showNotFoundCharacters = keysFromResponseApi.includes(keyWordToNotFoundCharacter)
    const showAllCharacters = keysFromResponseApi.includes(keywordToListCharacters)

    return (
        <section className={styles.findCharacter}>
            <div className={`${styles.findCharacter__grid} container`}>
                <div className={styles.firstRow}
                    id='rick-first-row-id'>
                    <h2 className={styles.__title}>{findCharacterData.title}</h2>
                    <p className={styles.__subtitle}>{findCharacterData.subtitle}</p>
                </div>
                <div className={styles.secondRow} 
                    id='rick-second-row-id'>
                    <RickForm 
                        collectCharacters={collectCharacters}
                        button__text='Find character'
                    />
                </div>
                <div className={styles.thirdRow}>
                    {showNotFoundCharacters && 
                        <NotFoundRickCharacter />
                    }
                    {showAllCharacters && 
                        <RickCharactersList
                            characters={charactersFromApi.results}
                        />
                    }
                </div>
            </div>
        </section>
    )
}
export default FindCharacter