
import styles from './style.module.css'
function SkillsHero(props) {
    const skillsHero = {
        title: props?.title || 'How can we help your Business ?',
        description: props?.description || 'We build ready made websites, mobile applications, and elaborate online business services.'
    }
    return (
        <div className="skillsHero">
            <h2 className={styles.skillsHero__title}>{skillsHero.title}</h2>
            <p className={styles.skillsHero__description}>
                {skillsHero.description}
            </p>
        </div>
    )
}
export default SkillsHero