
import homePageSvg from '../../../../../../assets/homePage.svg'
import homeCircleSvg from '../../../../../../assets/homeCircle.svg'
import homeRectangleWithCurveSvg from '../../../../../../assets/homeRectangleWithCurve.svg'
import styles from './style.module.css'
function BackgroundHero() {
    return (
        <div className={`homeHero__col ${styles.backgroundHero}`}>
            <span className={styles.backgroundHero__group}>
                <img src={homePageSvg} 
                    alt="Company presentation with people smiling" />
                <span className={styles.hero__bgCircle}>
                    <img src={homeCircleSvg} 
                        alt="Circle Icon" />
                </span>
                <span className={styles.hero__bgRectangleWithCurve}>
                    <img src={homeRectangleWithCurveSvg} 
                        alt="Triangle Icon" />
                </span>
            </span>
        </div>
    )
}
export default BackgroundHero