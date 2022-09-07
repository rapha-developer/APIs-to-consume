import styles from './style.module.css'

function Button(props) {
    const type = (props.type === 'submit') ? 'submit' : 'button'
    return (
        <button type={type} 
                className={`${styles.button__primary} capitalize`}>{props.text}</button>
    )
}
export default Button