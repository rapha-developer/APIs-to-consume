import boxSearchSvg from "../../../assets/box-search 1.svg";
import emptyWalletSvg from '../../../assets/empty-wallet 1.svg'
import codeSvg from '../../../assets/code-1 1.svg'
import chartSquare from '../../../assets/chart-square 1.svg'
import styles from './style.module.css'
import { createListOfCardsApi } from '../../../data/constants'

function Card(props) {
    const card = {
        title: props.title,
        description: props.description,
        iconType: props.iconType
    }
    function getIconFromType(iconType) {
        const firstCard = 0, secondCard = 1, thirdCard = 2;
		if (iconType === createListOfCardsApi[firstCard].iconType) { return boxSearchSvg; }
		if (iconType === createListOfCardsApi[secondCard].iconType) { return emptyWalletSvg; }
		if (iconType === createListOfCardsApi[thirdCard].iconType) { return codeSvg; }
		return chartSquare;
	} 
    const iconSvg = getIconFromType(card.iconType)
    return (
        <div className={styles.card}>
            <div className={styles.card__bgIcon}
                data-visible={card.iconType}
                >
                <img
                    src={iconSvg}
                    className={styles.card__icon}
                    alt="Maybe wallet, box, chart, code Icon"
                />
            </div>
            <h4 className={styles.card__title}>{card.title}</h4>
            <p className={styles.card__description}>
                {card.description}
            </p>
        </div>
    );
}
export default Card