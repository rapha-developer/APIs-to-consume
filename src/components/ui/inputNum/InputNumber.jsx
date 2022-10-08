
import styles from './style.module.css'

function InputNumber(props) {
    
    const input = {
        id: props?.id || 'Not found id in props',
        name: props?.name || 'Not found name in props',
        placeholder: props?.placeholder || 'Not found placeholder in props',
        onChange: props.onChange,
        text: props?.text || 1,
        type: 'number',
        minValue: props?.minimumValue || 1,
        maxValue: props?.maximumValue || 10
    }
    return (
        <input  
            type='number'
            id={input.id}
            name={input.name}
            min={input.minValue}
            max={input.maxValue}
            onChange={input.onChange}
            value={input.text}
            pattern='(2{1}6{1}[0-8]{1})|(2{1}[0-5]{1}[0-9]{1})|(1{1}[0-9]{1}[0-9]{1})|([0-9]{1}[0-9]{1})|([0-9]{1})'
            className={styles.form__field}
        />
    )
}
export default InputNumber