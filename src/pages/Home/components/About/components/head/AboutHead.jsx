
import styles from './style.module.css'
function AboutHead(props) {
    const headData = {
        title: props?.title || 'What our happy client say',
        description: props?.description || 'Several selected clients, who already believe in our service.'
    }
    return (
        <div className={styles.aboutHead}>
            <h2 className={styles.aboutHead__title}>{headData.title}</h2>
            <p className={styles.aboutHead__description}>{headData.description}</p>
        </div>
    )
}
export default AboutHead