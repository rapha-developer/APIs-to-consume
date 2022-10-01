import boxSearchSvg from '../../../assets/box-search 1.svg'
import emptyWalletSvg from '../../../assets/empty-wallet 1.svg'
import codeSvg from '../../../assets/code-1 1.svg'
import chartSquareSvg from '../../../assets/chart-square 1.svg'
import { createListOfCardsApi } from '../../../data/constants'

import styles from './style.module.css'
function Icon (props) {
    const iconData = {
        type: props.iconType,
        svg: getIconFromType(props.iconType)
    }
    function getIconFromType(iconType) {
        const firstIcon = 0, secondIcon = 1, thirdIcon = 2;
		if (iconType === createListOfCardsApi[firstIcon].iconType) { return boxSearchSvg; }
		if (iconType === createListOfCardsApi[secondIcon].iconType) { return emptyWalletSvg; }
		if (iconType === createListOfCardsApi[thirdIcon].iconType) { return codeSvg; }
		return chartSquareSvg;
	} 
    return (
        <div className={styles.__bgIcon}
            data-visible={iconData.type}
            >
            <img
                src={iconData.svg}
                className={styles.__icon}
                alt="Maybe wallet, box, chart, code Icon"
            />
        </div>
    )
}
export default Icon