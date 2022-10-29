
import Card from '../../../../../../components/ui/card/Card'
import styles from './style.module.css'
function SkillsCollection(props) {
    const skillCards = {
        items: props?.skills || []
    }
    const card__items = skillCards.items.map((skillItem, key) => {
        return (
            <Card 
                key={key}
				title={skillItem.title}
				description={skillItem.description}
				iconType={skillItem.iconType}
            />
        )
    })
    return (
        <div className={styles.skills__collection}>
            {card__items}
        </div>
    )
}
export default SkillsCollection