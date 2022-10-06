
import styles from './style.module.css'
function RickMortyCharacter(props) {
    const character = {
        image: props?.image || 'Not found image in props',
        name: props?.name || 'Not found name in props',
        bio: props?.bio || 'Not found bio in props'
    }
    return (
        <div className={styles.character}>
            <img src={character.image} 
                alt="Face of character" 
                className={styles.character__image} />
            <div className={styles.character__details}>
                <h2 className={styles.character__name}>{character.name}</h2>
                <p className={styles.character__description}>{character.bio}</p>
            </div>
        </div>
    )
}
export default RickMortyCharacter