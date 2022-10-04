import styles from './style.module.css'

function Input(props) {
    const input = {
        id: props?.id || 'Not found ID from input props',
        name: props?.name || 'Not found ID from input props',
        type: props?.text || 'text',
        placeholder: props?.placeholder || 'Not found placeholder from input props',
        onChange: props?.onChange,
        text: props?.text || ''
    }
    return (
        <input 
            type={input.type} 
            id={input.id}
            name={input.name}
            className={styles.form__field} 
            placeholder={input.placeholder}
            onChange={input.onChange}
            value={input.text}
        />
    )
}
export default Input