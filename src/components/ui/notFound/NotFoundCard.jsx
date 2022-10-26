
import errorDogSvg from '../../../assets/Error Dog.svg'
import styles from './style.module.css'
function NotFoundCard(props) {
    const notFound = {
        title: props?.title || 'Search not found any result',
        shadow: props?.shadow || 'yes'
    }
    return (
        <div className={styles.notFound}
            data-shadow={notFound.shadow}>
            <h3 className={styles.notFound__title}>{notFound.title}</h3>
            <img src={errorDogSvg} 
                alt="Not found 404 - Error message"
                className={styles.notFound__bg}
            />
        </div>
    )
}
export default NotFoundCard