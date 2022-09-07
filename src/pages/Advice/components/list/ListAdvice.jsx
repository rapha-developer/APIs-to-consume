import ItemAdvice from "../item/ItemAdvice";
import styles from './style.module.css'
import { adviceSubtitle } from '../../../../data/constants'

function ListAdvice(props) {
    const adviceAPI = {
        content: props.query,
        advices: props.advices.slips,
        resultsNumber: props.advices.total_results
    }
    
    const advice__items = adviceAPI.advices.map((itemAdvice) => {
        return (
            <ItemAdvice 
                key={itemAdvice.id}
                text={itemAdvice.advice}
                date={itemAdvice.date}
            />
        );
    });
    return (
        <div className={styles.adviceSection}>
            <div className={styles.adviceSection__header}>
                <h5 className={`${styles.adviceSection__subtitle} 
                    uppercase`}>{adviceSubtitle}</h5>
            </div>
            <div className={styles.adviceSection__list}>
                {advice__items}
            </div>
        </div>
    )
}
export default ListAdvice