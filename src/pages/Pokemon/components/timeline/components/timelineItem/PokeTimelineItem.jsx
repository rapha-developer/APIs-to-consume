
import styles from './style.module.css'
function PokeTimelineItem(props) {
    const timelineItem = {
        label: props?.label || 'Not found label',
        content: props?.content || 'Not found content'
    }
    return (
        <div className={styles.timeline__item}>
            <label htmlFor={timelineItem.label} 
                className={`capitalize ${styles.timeline__label}`}>
                {timelineItem.label}
            </label>
            <p id={timelineItem.label} 
                className={`capitalize ${styles.timeline__content}`}>
                {timelineItem.content}
            </p>
            <span className={styles.timeline__circle}></span>
        </div>
    )
}
export default PokeTimelineItem