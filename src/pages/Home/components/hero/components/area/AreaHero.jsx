
import homeGridSvg from '../../../../../../assets/homeGrid.svg'
import Button from '../../../../../../components/ui/button/Button'
import { createAreaHero } from '../../../../../../data/constants'
import styles from './style.module.css'
function AreaHero(props) {
    const heroData = {
        title: props?.title || createAreaHero.title,
        description: props?.description || createAreaHero.description,
        button__text: props?.button__text || createAreaHero.button__text
    }
    function handleClick() {
        const allHeightsNecessaryToScrollDown = [
            document.getElementById('home-hero-id').clientHeight,
            document.getElementById('navbar-id').clientHeight,
        ];
        const allHeightsAdded = sumAllHeightsToMakeScrollDown(allHeightsNecessaryToScrollDown)
        const halfSecond = 500
        setTimeout(() => {
            window.scroll({
                top: allHeightsAdded,
                left: 0,
                behavior: 'smooth'
            });
        }, halfSecond)
    }
    function sumAllHeightsToMakeScrollDown(heights) {
        const sumOfHeights = heights.reduce((accumulatorHeight, currentHeight) => {
            return accumulatorHeight + currentHeight
        });
        const excessHeight = 125
        return sumOfHeights - excessHeight
    }
    return (
        <div className={`homeHero__col ${styles.__columnHero}`}>
            <h1 className={styles.hero__title}>{heroData.title}</h1>
            <p className={styles.hero__description}>{heroData.description}</p>
            <Button
                onClick={handleClick}
                text={heroData.button__text} />
            <img src={homeGridSvg}
                className={styles.hero__grid}
                alt="Many points which compose beautiful grid" />
        </div>
    )
}
export default AreaHero