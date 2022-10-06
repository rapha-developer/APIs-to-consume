import RickMortyCharacter from "../card/RickMortyCharacter";
import styles from './style.module.css'

function RickCharactersList(props) {
    const RickMortyList = {
        heroTitle: `Found ${props.characters.length} characters`,
        heroSubtitle: `Foram encontrados ${props.characters.length} personagens pelo nome pesquisado`,
        characters: props.characters
    }
    const characters__collection = RickMortyList.characters.map((characterItem) => {
        const status = characterItem.status
        const specie = characterItem.species
        const gender = characterItem.gender
        const origin = characterItem.origin.name
        const bio = `My status is ${status}, I am a ${specie} ${gender} and born on ${origin}`
        return(
            <RickMortyCharacter 
                key={characterItem.id}
                image={characterItem.image}
                name={characterItem.name}
                bio={bio}
            />
        )
    });
    return (
        <div className={styles.characters__list}>
            <h3 className={styles.charactersList__heroTitle}>{RickMortyList.heroTitle}</h3>
            <p className={styles.characterList__heroSubtitle}>{RickMortyList.heroSubtitle}</p>
            <div className={styles.characters__collection}>
                {characters__collection}
            </div>
        </div>
    )
}
export default RickCharactersList
