
import styles from './style.module.css'
function ItemOption(props) {
    const option = {
        url: props?.url || 'Not found url in props',
        name: props?.name || 'Not found name in props'
    }
    return (
        <option
            className={`capitalize ${styles.option}`}
            value={option.url}>{option.name}</option>
    )
}
export default ItemOption