import FindCharacter from './Find/FindCharacter'
import RickHero from './Hero/RickHero'
import SingleCharacter from './Single/SingleCharacter'
import styles from './style.module.css'

function RickPage() {
    return (
        <div className={styles.rickPage}>
            <RickHero />
            <div className={styles.rick__bg}>
                <SingleCharacter />
                <FindCharacter />
            </div>
        </div>
    )
}
export default RickPage