
import styles from './style.module.css'
function AboutHead(props) {
    const headData = {
        title: props?.title || "I'ts interesting about me",
        description: props?.description || 'As informações mostradas abaixo foram coletadas da API do Github.'
    }
    return (
        <div className={styles.aboutHead}>
            <h2 className={styles.aboutHead__title}>{headData.title}</h2>
            <p className={styles.aboutHead__description}>{headData.description}</p>
        </div>
    )
}
export default AboutHead