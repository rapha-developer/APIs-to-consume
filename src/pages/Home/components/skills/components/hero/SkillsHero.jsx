
import { createMySkillsHero } from '../../../../../../data/constants'
import styles from './style.module.css'
function SkillsHero(props) {
    const skillsHero = {
        title: props?.title || createMySkillsHero.title,
        description: props?.description || createMySkillsHero.description
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