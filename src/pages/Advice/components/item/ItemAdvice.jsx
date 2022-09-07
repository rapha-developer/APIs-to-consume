import cookies from '../../../../assets/cookies.svg'
import styles from './style.module.css'

function ItemAdvice(props) {
    return (
        <div className={styles.advice__item}>
            <span className={styles.advice__date}>{props.date}</span>
            <div className={styles.advice__body}>
                <img src={cookies}
                    className={styles.advice__logo} 
                    alt="Cookies" />
                <div className={styles.advice__message}>"{props.text}"</div>
            </div>
        </div>
    )
}
export default ItemAdvice