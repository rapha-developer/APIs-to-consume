import styles from './style.module.css'
import errorSvg from '../../../../assets/error.svg'

function NotFoundAdvice(props) {
    const errorInPortuguese = "Não foram encontrados avisos que correspondam a esse termo de pesquisa."
    return (
        <div className={styles.NotFoundAdvice__wrapper}>
            <img src={errorSvg}
                className={styles.NotFoundAdvice__icon}
                alt="Not Found Icon" />
            <h2 className={styles.NotFoundAdvice__title}>{props.message}</h2>
            <h2 className={styles.NotFoundAdvice__description}>{errorInPortuguese}</h2>
        </div>
    )
}
export default NotFoundAdvice