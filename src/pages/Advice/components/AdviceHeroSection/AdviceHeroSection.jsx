import videoRectangleSvg from '../../../../assets/videoRectangleWithCurve.svg'
import { createAdviceHero } from '../../../../data/constants'
import styles from './style.module.css'

function AdviceHeroSection(props) {
    const createAdviceSection = createAdviceHero
    createAdviceSection.adviceCount = props?.adviceCount || 0;

    return (
        <div className="adviceHeroSection">
            <img src={videoRectangleSvg}
                className={styles.__bgMainColumn} 
                alt="Background form: purple rectangle with curves" />
            <div className={styles.__columnWithInformation}>
                <h2 className={styles.__title}>{createAdviceSection.title}</h2>
                <p className={styles.__description}>{createAdviceSection.description}</p>
            </div>
            <div className={styles.__columnWithStats}>
                <h3 className={styles.__stats}>
                    <span>{createAdviceSection.stats.signal}</span>{createAdviceSection.adviceCount}
                </h3>
                <p className={styles.__adviceLabel}>{createAdviceSection.stats.label}</p>
            </div>
        </div>
    )
}
export default AdviceHeroSection