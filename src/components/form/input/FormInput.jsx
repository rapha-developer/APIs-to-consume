import styles from './style.module.css'

function FormInput(props) {
    
    const formInput = {
        id: props.id,
        name: props.name,
        type: props.type,
        placeholder: props.placeholder,
        onChange: props.onChange,
        labelText: props.label,
        inputText: props.text
    }
    return (
        <div className={styles.form__group}>
            <label htmlFor={formInput.id} 
                onClick={props.changeText}
                className={styles.form__label}>
                {formInput.labelText}
            </label>
            <input 
                id={formInput.id}
                type={formInput.type}
                name={formInput.name}
                onChange={props.onChange}
                placeholder={formInput.placeholder}
                value={formInput.inputText}
                className={styles.form__field}
            />
        </div>
    )
}
export default FormInput