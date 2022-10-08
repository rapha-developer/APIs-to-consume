
import styles from './style.module.css'

function RickSingleHero(props) {
    const RickHero = {
        title: props?.title || 'Find Character By ID',
        description: props?.description || 'This feature fetches a character in the Rick and Morty API only with an identifier number called ID (unique identifier). Returning status, gender, location and other information.'
    }
    return (
        <div className={styles.singleCharacter__heroTitle}>
            <h2 className={styles.__title}>{RickHero.title}</h2>
            <p className={styles.__description}>{RickHero.description}</p>
        </div>
    )
}
export default RickSingleHero