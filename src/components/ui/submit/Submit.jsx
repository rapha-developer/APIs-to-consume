import styles from './style.module.css'

function Submit(props) {
    const submit = {
        text: props.text,
        radius: props?.radius || 'rounded',
        type: 'submit'
    }
    return (
        <button type={submit.type} 
                data-radius={submit.radius}
                className={`capitalize ${styles.btn} ${styles.btn__primary}`}>
            {submit.text}
        </button>
    )
}
export default Submit