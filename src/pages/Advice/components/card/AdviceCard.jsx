import Icon from '../../../../components/ui/icon/Icon'
import { createListOfCardsApi } from '../../../../data/constants'
import styles from './style.module.css'

function AdviceCard (props) {
    console.log(props)
    const advice = {
        id: props.advice.slip?.id || 'Not Found ID from Advice',
        text: props.advice.slip?.advice || 'Not Found Text of Advice',
        icon: props?.icon || 'wallet',
    }
    return (
        <div className={styles.adviceCard}>
            <Icon iconType={advice.icon}  />
            <p className={styles.adviceCard__text}>
                <i>“{advice.text}”</i>
            </p>
            <span className={styles.adviceCard__id}>{advice.id}</span>
        </div>
    )
}
export default AdviceCard