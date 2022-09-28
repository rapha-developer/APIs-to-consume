import homePageSvg from '../../assets/homePage.svg'
import homeCircleSvg from '../../assets/homeCircle.svg'
import homeRectangleWithCurveSvg from '../../assets/homeRectangleWithCurve.svg'
import homeGridSvg from '../../assets/homeGrid.svg'
import Button from '../../components/ui/button/Button'
import styles from './style.module.css'

function HomePage() {
    const homePageData = {
        title: 'A Digital Product Agency',
        description: 'Leading digital agency with solid design and development expertise. We build ready made websites, mobile applications, and elaborate online business services.',
    }
    return (
        <section className={styles.homePage}>
            <div className="container">
                <div className={styles.homePage__row}>
                    <div className={`homePage__col ${styles.homePage__colWithTitle}`}>
                        <h1 className={styles.homePage__title}>{homePageData.title}</h1>
                        <p className={styles.homePage__description}>{homePageData.description}</p>
                        <Button text="Contact now" />
                        <img src={homeGridSvg}
                            className={styles.homePage__grid}
                            alt="Many points which compose beautiful grid" />
                    </div>
                    <div className={`homePage__col ${styles.homePage__colWithBg}`}>
                    <span className={styles.homePage__background}>
                        <img src={homePageSvg} 
                            alt="Company presentation with people smiling" />
                        <span className={styles.homePage__bgCircle}>
                            <img src={homeCircleSvg} 
                                alt="Circle Icon" />
                        </span>
                        <span className={styles.homePage__bgRectangleWithCurve}>
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
export default HomePage