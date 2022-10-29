
import styles from './style.module.css'
function ProjectsPreface(props) {
    const prefaceData = {
        title: props?.title || 'Not found title in props',
        description: props?.description || 'Not found description in props',
    }
    return (
        <div className={`MyProjects__col ${styles.preface}`}>
            <h2 className={styles.preface__title}>{prefaceData.title}</h2>
            <p className={styles.preface__description}>{prefaceData.description}</p>
        </div>
    )
}
export default ProjectsPreface