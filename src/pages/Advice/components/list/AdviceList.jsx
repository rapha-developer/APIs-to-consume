import AdviceItem from '../item/AdviceItem';
import styles from './style.module.css'

function AdviceList(props) {
    const adviceListData = {
        title: 'Greats advices!',
        roadIcon: '╰----╮',
        advice__list: props?.advices || [],
        total__advices: props?.total__results || 0,
        query: props?.query || 'Not found query' 
    }
    const adviceCollection = adviceListData.advice__list.map((itemAdvice) => {
        return (
            <AdviceItem 
                key={itemAdvice.id}
                date={itemAdvice.date}
                message={itemAdvice.advice}
            />
        )
    });
    const explanation = `${adviceListData.total__advices} results were found with the subject: ${adviceListData.query}`
    return (
        <div className={styles.adviceList__wrapper}>
            <div className="container">
                <h3 className={styles.advice__title}>
                    {adviceListData.title}
                </h3>
                <p className={styles.advice__explanation}>{explanation}</p>
                <div className={styles.advice__collection}>
                    {adviceCollection}
                </div>
            </div>
        </div>
    )
}
export default AdviceList