
import homeGridSvg from '../../../../../../assets/homeGrid.svg'
import Button from '../../../../../../components/ui/button/Button'
import styles from './style.module.css'
function AreaHero(props) {
    const heroData = {
        title: props?.title || 'A Digital Product Agency',
        description: props?.description || 'Leading digital agency with solid design and development expertise. We build ready made websites, mobile applications, and elaborate online business services.',
        button__text: 'Contact now'
    }
    return (
        <div className={`homeHero__col ${styles.__columnHero}`}>
            <h1 className={styles.hero__title}>{heroData.title}</h1>
            <p className={styles.hero__description}>{heroData.description}</p>
            <Button text={heroData.button__text} />
            <img src={homeGridSvg}
                className={styles.hero__grid}
                alt="Many points which compose beautiful grid" />
        </div>
    )
}
export default AreaHero