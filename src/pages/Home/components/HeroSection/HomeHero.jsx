import homePageSvg from '../../../../assets/homePage.svg'
import homeCircleSvg from '../../../../assets/homeCircle.svg'
import homeRectangleWithCurveSvg from '../../../../assets/homeRectangleWithCurve.svg'
import homeGridSvg from '../../../../assets/homeGrid.svg'
import Button from '../../../../components/ui/button/Button'
import styles from './style.module.css'

function HomeHero(props) {
    const homeHeroData = {
        title: 'A Digital Product Agency',
        description: 'Leading digital agency with solid design and development expertise. We build ready made websites, mobile applications, and elaborate online business services.',
        button__text: 'Contact now'
    }
    return (
        <section className={styles.homeHero}>
            <div className="container">
                <div className={styles.homeHero__row}>
                    <div className={`homeHero__col ${styles.homeHero__colWithTitle}`}>
                        <h1 className={styles.homeHero__title}>{homeHeroData.title}</h1>
                        <p className={styles.homeHero__description}>{homeHeroData.description}</p>
                        <Button text={homeHeroData.button__text} />
                        <img src={homeGridSvg}
                            className={styles.homeHero__grid}
                            alt="Many points which compose beautiful grid" />
                    </div>
                    <div className={`homeHero__col ${styles.homeHero__colWithBg}`}>
                    <span className={styles.homeHero__background}>
                        <img src={homePageSvg} 
                            alt="Company presentation with people smiling" />
                        <span className={styles.homeHero__bgCircle}>
                            <img src={homeCircleSvg} 
                                alt="Circle Icon" />
                        </span>
                        <span className={styles.homeHero__bgRectangleWithCurve}>
                            <img src={homeRectangleWithCurveSvg} 
                                alt="Triangle Icon" />
                        </span>
                    </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomeHero