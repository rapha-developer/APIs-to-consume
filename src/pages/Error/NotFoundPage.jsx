
import NotFoundBgSvg from '../../assets/page-not-found.svg'
import styles from './style.module.css'
function NotFoundPage() {
    return (
        <section className={styles.notFoundPage}>
            <img src={NotFoundBgSvg}
                className={styles.notFoundPage__image}
                alt="Not found page - error 404" />
        </section>
    )
}
export default NotFoundPage