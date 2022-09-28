import styles from './style.module.css'

function Submit(props) {
    const submit = {
        text: props.text,
        type: 'submit'
    }
    return (
        <button type={props.type} 
                className={`capitalize ${styles.btn} ${styles.btn__primary}`}>
            {submit.text}
        </button>
    )
}
export default Submit