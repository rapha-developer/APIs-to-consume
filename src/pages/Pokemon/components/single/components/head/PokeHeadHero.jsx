
import styles from './style.module.css'
function PokeHeadHero(props) {
    const headHero = {
        title: props?.title || "Hi, I'am",
        name: props?.name || 'Not found name in props',
        description: props?.description || 'Not found description in props'
    }
    return (
        <div className={styles.headHero}>
            <h3 className={styles.headHero__title}>
                {headHero.title} <span className='capitalize'>{headHero.name}</span>
            </h3>
            <hr className={styles.headHero__line}/>
            <p className={styles.headHero__description}>
                {headHero.description}
            </p>
        </div>
    )
}
export default PokeHeadHero