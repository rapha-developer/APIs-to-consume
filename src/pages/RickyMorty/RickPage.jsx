import FindCharacter from './Find/FindCharacter'
import SingleCharacter from './Single/SingleCharacter'
import styles from './style.module.css'

function RickPage() {
    return (
        <div className={styles.rickyPage}>
            <SingleCharacter />
            <FindCharacter />
        </div>
    )
}
export default RickPage