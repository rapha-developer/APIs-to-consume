import Icon from '../../../../components/ui/icon/Icon'
import styles from './style.module.css'

function AdviceItem(props) {
    const item = {
        date: props?.date || 'Not found date',
        message: props?.message || 'Not found advice message',
        icon: 'boxSearch',
        size: 'small'
    }
    return (
        <div className={styles.advice__item}>
            <span className={styles.advice__date}>{item.date}</span>
            <div className={styles.advice__body}>
                <Icon iconType={item.icon} size={item.size} />
                <p className={styles.advice__message}>“<i>{item.message}</i>”</p>
            </div>
        </div>
    )
}
export default AdviceItem