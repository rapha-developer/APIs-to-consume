import styles from './style.module.css'

function Button(props) {
    const buttonData = {
        text: props.text,
        onClick: props?.onClick
    }
    return (
        <button className={`${styles.btn} ${styles.btn__primary}`}
                onClick={buttonData.onClick}>{buttonData.text}</button>
    )
}
export default Button