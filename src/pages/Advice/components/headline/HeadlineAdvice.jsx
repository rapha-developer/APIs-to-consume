import Button from '../../../../components/ui/Button/Button'
import styles from './style.module.css'

function HeadlineAdvice(props) {
    const headline = {
        subtitle: props.subtitle,
        title: props.title,
        description: props.description,
        stats: {
            adviceCount: props.adviceCount,
            signal: props.stats?.signal || "+",
            label: props.stats.label
        },
    }
    return (
        <div className={styles.headline__wrapper} >
            <h5 className={`${styles.headline__subtitle} uppercase`}>
                {headline.subtitle}
            </h5>
            <h2 className={styles.headline__title}>
                {headline.title}
            </h2>
            <p className={styles.headline__desc}>
                {headline.description}
            </p>
            <h6 className={styles.headline__stat}>
                <span>{headline.stats.signal}</span>{headline.stats.adviceCount}
            </h6>
            <p className={styles.headline__label}>
                {headline.stats.label}
            </p>
            <button
                onClick={props.callAdvice}
                className={styles.headline__button}>Get Random Advice</button>
        </div>
    )
}
export default HeadlineAdvice