import styles from './style.module.css'

function Button(props) {
    const buttonData = {
        text: props.text 
    }
    return (
        <button className={`${styles.btn} ${styles.btn__primary}`}>{buttonData.text}</button>
    )
}
export default Button