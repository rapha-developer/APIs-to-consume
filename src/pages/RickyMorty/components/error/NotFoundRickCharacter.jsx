import error from '../../../../assets/error.svg'
import styles from './style.module.css'
function NotFoundRickCharacter(props) {
    const NotFoundCharacterData = {
        message: props?.message || 'No characters found with this name searched',
        messageInPortuguese: props?.description || 'Não foram encontrados personagens que correspondam a esse nome',
    }
    return (
        <div className={styles.notFoundCharacter__wrapper}>
            <img src={error}
                className={styles.notFoundCharacter__icon}
                alt='Icon which symbolize error 404 (Not found)' />
            <h3 className={styles.notFoundCharacter__title}>
                {NotFoundCharacterData.message}
            </h3>
            <p className={styles.notFoundCharacter__description}>
                {NotFoundCharacterData.messageInPortuguese}
            </p>
        </div>
    )
}
export default NotFoundRickCharacter